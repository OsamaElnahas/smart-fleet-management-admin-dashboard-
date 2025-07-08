import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

export default function ExcelTemplateDownloader({setIsDownloaded}) {
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

      const blob = new Blob([response.data], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
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
                    setIsDownloaded(true)

      }, 1000);
    }
  }, [fileUrl]);

  return (
    <div className="p-4">
      <button
        onClick={() =>
            
            handleDownload()
        
        }
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Download Vehicle Template
      </button>

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
