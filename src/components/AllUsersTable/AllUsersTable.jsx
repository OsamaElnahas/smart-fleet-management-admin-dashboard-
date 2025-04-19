import React from "react";
import { IoEllipsisVertical } from "react-icons/io5";

const AllUsersTable = () => {
  return (
    <div className="font-Inter flex flex-col">
      <div className="head flex justify-start text-[#04103B] p-3 items-center rounded-lg font-[540] text-[1rem] w-[100%]">
        <span className="w-[10%]">ID</span>
        <span className="w-[20%]">Driver Name</span>
        <span className="w-[20%]">Driver Number</span>
        <span className="w-[20%]">Driver cos</span>
        <span className="w-[20%]">Rating</span>
      </div>
      <div className="row  flex justify-start  bg-white w-[100%] rounded-lg p-3 font-[540] items-center text-[1rem]">
        <span className="w-[10%]">1</span>
        <span className=" w-[20%]">Osama Elnahas</span>
        <span className="w-[20%]">01005505505</span>
        <span className="w-[20%]">218452</span>
        <span className="w-[20%]">218452</span>
        <span className="w-[]">
          <IoEllipsisVertical />
        </span>
      </div>
      <div className="row  flex justify-start  bg-white w-[100%] rounded-lg p-3 font-[540] items-center text-[1rem] mt-3">
        <span className="w-[10%]">1</span>
        <span className=" w-[20%]">Osama Elnahas</span>
        <span className="w-[20%]">01005505505</span>
        <span className="w-[20%]">218452</span>
        <span className="w-[20%]">218452</span>
        <span className="w-[]">
          <IoEllipsisVertical />
        </span>
      </div>
    </div>
  );
};

export default AllUsersTable;
