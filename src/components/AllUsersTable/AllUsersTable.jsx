import React from "react";
import { IoEllipsisVertical } from "react-icons/io5";

export default function AllUsersTable({titles}) {
  return (
    <div className="font-Inter   font-[540] w-full gap-y-5 p-1  md:p-3 rounded-lg  text-[0.75rem] md:text-[0.9rem] lg:text-[1.1rem] flex flex-col gap-2 truncate overflow-hidden whitespace-nowrap justify-center  ">
     
      <div className="row grid grid-cols-[10%,30%,20%,30%,10%] md:grid-cols-[8%,20%,18%,25%,10%,10%,10%] text-[#04103B]  rounded-lg font-[550] mb-1 ">

      <div className="p-2 ">
        {titles.col1}
      </div>
      <div className="p-2 ">
        {titles.col2}
      </div>
      <div className="p-2 ">
        {titles.col3}
      </div>
      <div className="p-2 ">
        {titles.col4}
      </div>
      <div className="p-2  hidden md:block">
        {titles.col5}
      </div>
      <div className="p-2  hidden md:block">{titles.col6}</div>
      <div className="p-3">{titles.col7}</div>
      </div>

      <div className="row grid  grid-cols-[10%,30%,20%,30%,10%] md:grid-cols-[8%,20%,18%,25%,10%,10%,10%] bg-white  rounded-lg border border-stone-200 font-[300]  shadow-md ">

      <div className=" p-2 truncate overflow-hidden whitespace-nowrap  rounded-tl-xl rounded-bl-xl">12</div>
      <div className=" p-2 truncate overflow-hidden whitespace-nowrap ">Osama Elnahas</div>
      <div className=" p-2 truncate overflow-hidden whitespace-nowrap ">01005505505</div>
      <div className=" p-2 truncate overflow-hidden whitespace-nowrap ">osamaelnahas@gmail.com</div>
      <div className=" p-2 truncate overflow-hidden whitespace-nowrap hidden md:block ">22</div>
      <div className=" p-2 truncate overflow-hidden whitespace-nowrap hidden md:block">portsaid</div>
      <div className=" px-4 py-2 rounded-tr-xl rounded-br-xl ml-auto">
        <IoEllipsisVertical />
      </div>
      </div>
      <div className="row  grid  grid-cols-[10%,30%,20%,30%,10%] md:grid-cols-[8%,20%,18%,25%,10%,10%,10%] bg-white  rounded-lg border border-stone-200 font-[300] shadow-md ">

      <div className=" p-2 truncate overflow-hidden whitespace-nowrap  rounded-tl-xl rounded-bl-xl">12</div>
      <div className=" p-2 truncate overflow-hidden whitespace-nowrap ">Osama Elnahas</div>
      <div className=" p-2 truncate overflow-hidden whitespace-nowrap ">01005505505</div>
      <div className=" p-2 truncate overflow-hidden whitespace-nowrap ">osamaelnahas@gmail.com</div>
      <div className=" p-2 truncate overflow-hidden whitespace-nowrap hidden md:block">22</div>
      <div className=" p-2 truncate overflow-hidden whitespace-nowrap hidden md:block">portsaid</div>
      <div className=" px-4 py-2  rounded-tr-xl rounded-br-xl ml-auto">
        <IoEllipsisVertical />
      </div>
      </div>
    </div>
  );
}

