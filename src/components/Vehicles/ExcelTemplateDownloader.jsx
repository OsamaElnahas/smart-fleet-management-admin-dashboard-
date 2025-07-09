import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { FaDownload, FaInfo, FaInfoCircle } from "react-icons/fa";

export default function ExcelTemplateDownloader({ setIsDownloaded }) {
  const [fileUrl, setFileUrl] = useState(null);
  const linkRef = useRef(null);

  const handleDownload = async () => {
    try {
      const response = await axios.get(
        "https://veemanage.runasp.net/api/Vehicle/download-template",
        {
          responseType: "blob", // Important for binary files
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const blob = new Blob([response.data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const url = URL.createObjectURL(blob);
      setFileUrl(url); // triggers render
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  useEffect(() => {
    if (fileUrl && linkRef.current) {
      linkRef.current.click();
      setTimeout(() => {
        URL.revokeObjectURL(fileUrl);
        setFileUrl(null);
        setIsDownloaded(true);
      }, 1000);
    }
  }, [fileUrl]);

  return (
    <div className="py-1">
      <div className="flex items-center gap-5 ">
      

      <button
        onClick={() => handleDownload()}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mb-3 flex items-center gap-2"
      >
        <FaDownload/> Download Maintenance History Template
      </button>
        <p className=" font-semibold text-gray-400 text-center flex items-center gap-2">
          <FaInfoCircle/> You Should Download the Template First and Fill Before Uploading
        </p>
            </div>


      {/* Conditionally rendered download link (invisible) */}
      {fileUrl && (
        <a
          href={fileUrl}
          download="VehicleTemplate.xlsx"
          ref={linkRef}
          style={{ display: "none" }}
        >
          Download
        </a>
      )}
    </div>
  );
}
