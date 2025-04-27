import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import { Link } from "react-router";

export default function AllUsersTable({ titles, rows, columnSizes }) {
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
            className="grid text-center mb-2 bg-white rounded-lg border border-stone-200 font-[300] shadow-md"
            key={index}
            style={{ gridTemplateColumns: columnSizes.join(" ") }}
          >
            {row.values.map((item, idx) => (
              <div className="p-2 truncate" key={idx}>
                {item}
              </div>
            ))}
            <Link
              to={row.link}
              className="p-2 flex justify-end bg-primaryColor rounded-r-lg text-[16px] cursor-pointer text-white"
            >
              {/* View Profile */}
              <FaArrowRight  />

            </Link>
          </div>
        ))}
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
            <div className="pt-2 text-right">
              <Link
                to={row.link}
                className="inline-block bg-primaryColor text-white py-1 px-3 rounded-lg text-sm"
              >
                View Profile
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
