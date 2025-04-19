import React from "react";
import { IoEllipsisVertical } from "react-icons/io5";

export default function AllUsersTable({titles}) {
  return (
    <div className="font-Inter   font-[540] w-full gap-y-5 p-1  md:p-3 rounded-lg  text-[0.75rem] md:text-[0.9rem] lg:text-[1.1rem] flex flex-col gap-4">
     
      <div className="row  grid grid-cols-[10%,20%,20%,20%,20%,10%] text-[#04103B]  rounded-lg font-[550]  mb-1">

      <div className="p-3">
        {titles.col1}
      </div>
      <div className="p-3">
        {titles.col2}
      </div>
      <div className="p-3">
        {titles.col3}
      </div>
      <div className="p-3">
        {titles.col4}
      </div>
      <div className="p-3">
        {titles.col5}
      </div>
      <div className="p-3"></div>
      </div>

      <div className="row  grid grid-cols-[10%,20%,20%,20%,20%,10%]   rounded-lg border border-stone-200 font-[300]  ">

      <div className="bg-white p-3 rounded-tl-xl rounded-bl-xl">1</div>
      <div className="bg-white p-3">Osama Elnahas</div>
      <div className="bg-white p-3">01005505505</div>
      <div className="bg-white p-3">218452</div>
      <div className="bg-white p-3">218452</div>
      <div className="bg-white p-3 rounded-tr-xl rounded-br-xl">
        <IoEllipsisVertical />

      </div>
      </div>
      <div className="row  grid grid-cols-[10%,20%,20%,20%,20%,10%]   rounded-lg border border-stone-200 font-[300]  ">

      <div className="bg-white p-3 rounded-tl-xl rounded-bl-xl">1</div>
      <div className="bg-white p-3">Osama Elnahas</div>
      <div className="bg-white p-3">01005505505</div>
      <div className="bg-white p-3">218452</div>
      <div className="bg-white p-3">218452</div>
      <div className="bg-white p-3 rounded-tr-xl rounded-br-xl">
        <IoEllipsisVertical />

      </div>
      </div>
    </div>
  );
}

