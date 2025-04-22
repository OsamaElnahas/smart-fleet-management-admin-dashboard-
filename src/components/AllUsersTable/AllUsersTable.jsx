import React from "react";
import { IoEllipsisVertical } from "react-icons/io5";

export default function AllUsersTable({titles, rows, columnSizes}) {
  return (
    <div className="font-Inter   font-[540] w-full gap-y-5 p-1  md:p-3 rounded-lg  text-[0.75rem] md:text-[0.9rem] lg:text-[1.1rem] flex flex-col gap-2 truncate overflow-hidden whitespace-nowrap justify-center  ">
     
      <div className={`row text-[#04103B]  rounded-lg font-[550] mb-1 grid`} style={{ gridTemplateColumns: `${columnSizes.join(" ")}` }}>
    {titles.map((title => (
        <div className="p-2 " key={title}>
          {title}
        </div>
      )))}
      
      
      </div>
      {rows.map((row,index) => (
        <div className="row grid   bg-white  rounded-lg border border-stone-200 font-[300] shadow-md " key={index} style={{ gridTemplateColumns: `${columnSizes.join(" ")}` }}>
          {row.map((item, index) => ( 
            <div className=" p-2 truncate overflow-hidden whitespace-nowrap " key={index}>
              {item}
              
           </div>
            ))
            }
                <div className=" px-4 py-2 rounded-tr-xl rounded-br-xl  cursor-pointer ">
                <IoEllipsisVertical />
            </div>
            </div>
            ))}

    
    </div>
  );
}

