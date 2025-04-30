import React, { useState } from "react";
import { FaArrowRight, FaRecycle, FaRemoveFormat, FaTrash, FaUser } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { Link } from "react-router";
import Popup from "../Popup/Popup";
import { QueryClient, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";


export default function AllUsersTable({ titles, rows, columnSizes,baseUrl,keyOfQuery }) {
  const queryClient = useQueryClient();
  const [selectedRowIndex, setSelectedRowIndex] = useState(null);
  const[isVisable,setIsvisable]=useState(false)
  const [selectedId, setSelectedId] = useState(null);

  const mutation = useMutation({
    mutationFn: deleteItem,
    onSuccess: () => {
      toast.success(' Deleted Successfully !');
      setIsvisable(false)
      queryClient.invalidateQueries([keyOfQuery]);
    },
    onError: (error) => {
      // console.error('Error deleting data:', error);
      toast.error('Delete Failed');
    },
  });
  
  async function deleteItem() {
    return await axios.delete(`${baseUrl}/${selectedId}`,
      {
        headers:{
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },

      }
    );
  }
  const handleToggle = (index) => {
    if (selectedRowIndex === index) {
      setSelectedRowIndex(null); // لو دوست تاني يقفله
    } else {
      setSelectedRowIndex(index); // يفتح على الصف ده بس
    }
  };
  // console.log("selectedId",selectedId);
  
  
  return (
    <div className="font-Inter font-[540] w-full p-1 md:p-3 text-[0.75rem] md:text-[0.9rem] lg:text-[1.1rem] flex flex-col gap-3">
      <div className="hidden lg:flex flex-col gap-y-2  w-full">
        {/* Table header */}
        <div
          className={`grid text-center text-[#04103B] font-[550]`}
          style={{ gridTemplateColumns: columnSizes.join(" ") }}
        >
          {titles.map((title) => (
            <div className="p-2" key={title}>
              {title}
            </div>
          ))}
          <div className="p-2"></div>
        </div>

        {rows.map((row, index) => (
          <div
            className={`grid text-center mb-2 bg-white rounded-lg  font-[300] shadow-md relative transition duration-500 ${selectedRowIndex===index ? "shadow-lg border-2 border-primaryColor" :"border border-stone-300"}`}
            key={index}
            style={{ gridTemplateColumns: columnSizes.join(" ") }}
            
          >
            {row.values.map((item, idx) => (
              <div className="p-2 truncate" key={idx}>
                {item}
              </div>
            ))}
              <div className="flex flex-col justify-center text-primaryColor font-bold cursor-pointer ">

              <IoEllipsisVertical  size={25} onClick={()=>handleToggle(index)}/>
              </div>

              {
                selectedRowIndex===index &&<div className="flex flex-col gap-1 p-2 rounded-md shadow-2xl text-primaryColor border  border-primaryColor absolute right-0 -top-[87px] bg-white z-50 transition duration-500">

            <Link
              to={row.link}
              className=" p-[3px] px-1 border-b border-stone-300  text-[16px] cursor-pointer  flex gap-2 items-center transition duration-300 rounded-md hover:bg-primaryColor hover:text-white"
              >
              <span><FaUser/></span>  Profile

            </Link>
            <div className=" p-[3px]  px-1 text-[16px] cursor-pointer  flex gap-2 items-center transition duration-300 rounded-md hover:bg-primaryColor hover:text-white " onClick={()=>{
                setSelectedId(row.id);
              setIsvisable(true)}} > 
              <span><FaTrash/></span>
              Delete
            </div>
              </div>}
          </div>
        ))}
        {isVisable &&<Popup message={"Are You Sure to Delete This User ?"} onClose={()=>setIsvisable(false)} onConfirm={() => {
          mutation.mutate();
}}/>}
      </div>


      {/* Responsive layout for small screens */}
      <div className="flex flex-col gap-4 lg:hidden">
        {rows.map((row, idx) => (
          <div
            key={idx}
            className="bg-white p-4 rounded-xl shadow border text-sm"
          >
            {titles.map((title, index) => (
              <div key={index} className="flex justify-between border-b py-1">
                <span className="font-semibold text-gray-600">{title}</span>
                <span className="text-gray-800">{row.values[index]}</span>
              </div>
            ))}
            <div className="mt-8 flex flex-col gap-3 ">
              <Link
                to={row.link}
                className="inline-block bg-primaryColor text-white py-1 px-3 rounded-lg text-sm w-28 text-center"
              >
                View Profile
              </Link>
              <div className=" py-1 px-3 text-[16px] cursor-pointer  flex gap-3 items-center bg-red-300 rounded-lg text-white w-28 text-center" onClick={()=>{
                setSelectedId(row.id);
              setIsvisable(true)}} > 
              <span><FaTrash/></span>
              Delete
            </div>
            </div>
            
          </div>
        ))}
                {isVisable &&<Popup message={"Are You Sure to Delete This User ?"} onClose={()=>setIsvisable(false)} onConfirm={() => {
          mutation.mutate();
}}/>}
      </div>
    </div>
  );
}
