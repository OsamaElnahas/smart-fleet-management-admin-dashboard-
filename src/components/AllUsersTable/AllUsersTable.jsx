import React from "react";
import { IoEllipsisVertical } from "react-icons/io5";

export default function AllUsersTable() {
  return (
    <div className="font-Inter flex flex-col gap-y-4 text-[1rem] font-[540] w-full ">
      {/* HEAD */}
      <div className="grid grid-cols-[10%,20%,20%,20%,20%,10%] text-[#04103B] bg-gray-100 p-3 rounded-lg font-[550]">
        <div>ID</div>
        <div>Driver Name</div>
        <div>Driver Number</div>
        <div>Driver Cos</div>
        <div>Rating</div>
        <div></div>
      </div>
      {/* ROW */}
      <div className="grid grid-cols-[10%,20%,20%,20%,20%,10%] bg-white p-4 rounded-xl shadow-md">
        <div>1</div>
        <div>Osama Elnahas</div>
        <div>01005505505</div>
        <div>218452</div>
        <div>218452</div>
        <button>
          <IoEllipsisVertical className="text-[1.5rem]" />
        </button>
      </div>
      <div className="grid grid-cols-[10%,20%,20%,20%,20%,10%] bg-white p-4 rounded-xl shadow-md">
        <div>1</div>
        <div>Osama Elnahas</div>
        <div>01005505505</div>
        <div>218452</div>
        <div>218452</div>
        <button>
          <IoEllipsisVertical className="text-[1.5rem]" />
        </button>
      </div>
    </div>
  );
}
