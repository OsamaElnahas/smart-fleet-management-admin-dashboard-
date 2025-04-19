import React from "react";
import { IoEllipsisVertical } from "react-icons/io5";

export default function AllUsersTable() {
  return (
    <div className="font-Inter grid grid-cols-[10%,20%,20%,20%,20%,10%] text-[1rem] font-[540] w-full gap-y-5">
      {/* Head */}
      <div className="text-[#04103B] p-3 rounded-lg font-[550] text-[1rem]">
        ID
      </div>
      <div className="text-[#04103B] p-3 rounded-lg font-[550] text-[1rem]">
        Driver Name
      </div>
      <div className="text-[#04103B] p-3 rounded-lg font-[550] text-[1rem]">
        Driver Number
      </div>
      <div className="text-[#04103B] p-3 rounded-lg font-[550] text-[1rem]">
        Driver Cos
      </div>
      <div className="text-[#04103B] p-3 rounded-lg font-[550] text-[1rem]">
        Rating
      </div>
      <div className="text-[#04103B] p-3 rounded-lg font-[550] text-[1rem]"></div>

      {/* Row 1 */}
      <div className="bg-white p-4 rounded-tl-xl rounded-bl-xl">1</div>
      <div className="bg-white p-4">Osama Elnahas</div>
      <div className="bg-white p-4">01005505505</div>
      <div className="bg-white p-4">218452</div>
      <div className="bg-white p-4">218452</div>
      <div className="bg-white p-4 rounded-tr-xl rounded-br-xl">
        <IoEllipsisVertical />
      </div>
    </div>
  );
}
// {/* <div className="font-Inter grid grid-cols-[10%,20%,20%,20%,20%,10%] text-[1rem] font-[540] w-full gap-y-5">
//       {/* Head */}
//       <div className="text-[#04103B] p-3 rounded-lg font-[550] text-[1rem]">ID</div>
//       <div className="text-[#04103B] p-3 rounded-lg font-[550] text-[1rem]">Driver Name</div>
//       <div className="text-[#04103B] p-3 rounded-lg font-[550] text-[1rem]">Driver Number</div>
//       <div className="text-[#04103B] p-3 rounded-lg font-[550] text-[1rem]">Driver Cos</div>
//       <div className="text-[#04103B] p-3 rounded-lg font-[550] text-[1rem]">Rating</div>
//       <div className="text-[#04103B] p-3 rounded-lg font-[550] text-[1rem]"></div>

//       {/* Row 1 */}
//       <div className="bg-white p-4 rounded-tl-xl rounded-bl-xl">1</div>
//       <div className="bg-white p-4">Osama Elnahas</div>
//       <div className="bg-white p-4">01005505505</div>
//       <div className="bg-white p-4">218452</div>
//       <div className="bg-white p-4">218452</div>
//       <div className="bg-white p-4 rounded-tr-xl rounded-br-xl">
//         <IoEllipsisVertical />
//       </div>
//     </div> */}
