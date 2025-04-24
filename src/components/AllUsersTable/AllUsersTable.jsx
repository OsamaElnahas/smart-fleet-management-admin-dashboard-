import React from "react";
import { IoEllipsisVertical } from "react-icons/io5";

export default function AllUsersTable({ titles, rows, columnSizes }) {
  return (
    <div className="font-Inter font-[540] w-full p-1 md:p-3 text-[0.75rem] md:text-[0.9rem] lg:text-[1.1rem] flex flex-col gap-3">

      <div className="hidden md:flex flex-col gap-y-2  w-full">
        {/* Table header */}
        <div className={`grid text-[#04103B] font-[550]`} style={{ gridTemplateColumns: columnSizes.join(" ") }}>
          {titles.map((title) => (
            <div className="p-2" key={title}>{title}</div>
          ))}
        </div>

        {rows.map((row, index) => (
          <div className="grid bg-white rounded-lg border border-stone-200 font-[300] shadow-md" key={index} style={{ gridTemplateColumns: columnSizes.join(" ") }}>
            {row.map((item, idx) => (
              <div className="p-2 truncate" key={idx}>{item}</div>
            ))}
            <div className="px-4 py-2 cursor-pointer text-lg text-gray-500">
              <IoEllipsisVertical />
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 md:hidden">
        {rows.map((row, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl shadow border text-sm">
            {titles.map((title, index) => (
              <div key={index} className="flex justify-between border-b py-1">
                <span className="font-semibold text-gray-600">{title}</span>
                <span className="text-gray-800">{row[index]}</span>
              </div>
            ))}
            <div className="pt-2 text-right text-xl text-gray-500">
              <IoEllipsisVertical className="inline-block" />
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
