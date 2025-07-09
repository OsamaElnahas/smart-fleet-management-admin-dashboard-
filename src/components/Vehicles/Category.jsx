import React, { useState } from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import { Link, NavLink } from "react-router";
import { FaCar, FaTruck, FaBus, FaCircle } from "react-icons/fa";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";
import Popup from "../Popup/Popup";

export default function Category() {
  const [openIndex, setOpenIndex] = useState(null);
  const[isVisable,setIsvisable]=useState(null)
  const[selectedId,setSelectedId]=useState(null)
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["category"],
    queryFn: getCategory,
  });
  console.log(data);

  async function delData(id) {
    try {
      const res = await axios.delete(
        `https://veemanage.runasp.net/api/Vehicle/Category/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setOpenIndex(null);
      refetch();
      toast.success("Deleted Successfully")
      setIsvisable(false)
      return res?.data;
    } catch (error) {
      console.error("Error deleting data:", error);
      toast.error("Deleting faild")
      return error;
    }
  }

  async function getCategory() {
    try {
      const response = await axios.get(
        "https://veemanage.runasp.net/api/Vehicle/Category",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return response?.data;
    } catch (error) {
      console.error("Error fetching category:", error);
      return error;
    }
  }
  console.log(selectedId);
  
  return (
    <>
      <Link
        to={"/category/add"}
        className="block mb-12 border border-primaryColor w-[180px] p-2 text-center rounded-lg text-primaryColor font-bold"
      >
        + Add New Category
      </Link>
      <div className="grid  grid-cols-2 sm:grid-cols-3 gap-3">
        {data?.map((item, index) => (
          <div
            key={index}
            className="bg-white py-4 px-6 rounded-md border-l-4 border-primaryColor shadow-md"
          >
            <div className="flex gap-3 items-center relative">
              <span className="text-2xl text-primaryColor">
                {item.name.toLowerCase().includes("sedan") ? (
                  <FaCar />
                ) : item.name.toLowerCase().includes("bus") ? (
                  <FaBus />
                ) : item.name.toLowerCase().includes("truck") ? (
                  <FaTruck />
                ) : (
                  <FaCar />
                )}
              </span>
              <span>{item.name}</span>
              <button
                className="text-[#4880FF] text-[23px] ml-auto"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <IoEllipsisVertical />
              </button>
              {openIndex === index && (
                <div className="absolute bg-white shadow-md rounded-md p-2 border border-primaryColor right-2 -top-12">
                  <ul className="flex flex-col items-start gap-2">
                  
                    <button
                      onClick={() =>{
                        setSelectedId(item.id)
                        setIsvisable(true)
                      }
                      } 
                        
                      className="text-red-500 font-semibold hover:text-blue-700 cursor-pointer"
                    >
                      Delete
                    </button>
                  </ul>
                </div>
              )}
            </div>
            <div className="text-gray-600 mt-3">{item.description}</div>
          </div>
        ))}
      </div>
      {isVisable &&<Popup message={"Are You Sure to Delete This Category ?"} onClose={()=>setIsvisable(false)} onConfirm={() => {
        delData(selectedId)

}}/>}
    </>
  );
}
