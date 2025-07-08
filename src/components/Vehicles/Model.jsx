import React from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import { Link } from "react-router-dom";

const Model = () => {
  return (
    <div className="font-Nunito">
      <Link
        to={"/vehicles/add"}
        className="block mb-12 border border-primaryColor w-[180px] p-2 text-center rounded-lg text-primaryColor font-bold"
      >
        + New Model
      </Link>
    
      <div className="grid grid-cols-3">
        <div className="bg-[#FFFFFF] py-4 px-4 rounded-lg shadow-lg m-2 border-l-[5px] max-w-[331px] min-h-[213px] border-[#4880FF]">
          <div className="flex justify-between items-center border-b-2 pb-4 mb-5">
            <span className="text-[25px] font-medium">Audi Q5</span>
            <button className="text-[#4880FF] text-[23px]">
              <IoEllipsisVertical />
            </button>
          </div>
          <span className="block mb-4">
            Year: <span className="text-[#6C757D]">2025</span>
          </span>
          <span className="block">
            Vehicles: <span className="text-[#6C757D]">2025</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Model;
