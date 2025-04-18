import React from "react";
import { useState } from "react";
import { FaUsers, FaCar, FaHome } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdLogout } from "react-icons/md";

const Sidebar = ({ isVisable, setisVisable }) => {
  const [showUsersSubmenu, setShowUsersSubmenu] = useState(false);
  const [showVehiclesSubmenu, setShowVehiclesSubmenu] = useState(false);
  const [isActive, setisActive] = useState(false);
  // function handleToggle (){

  //   setisVisable(!isVisable);
  // }
  const handleClick = () => {
    setisActive(!isActive);
  };
  console.log(isVisable);
  return (
    <div
      className={`s-1 bg-[#191919] min-h-[100vh] text-white flex flex-col justify-between px-5 py-10 font-Inter fixed w-[250px] ${
        !isVisable ? " absolute translate-x-0" : ""
      }`}
    >
      <div className="up">
        <div className="title text-[1.3rem] flex gap-3 items-center text-stone-100 mb-14">
          <div className="flex-1">
            <span className=" font-extrabold">VEE </span>MANAGE
          </div>
          <span
            className="text-[1.5rem] text-stone-100 cursor-pointer hover:scale-125 transition duration-300"
            onClick={() => setisVisable(!isVisable)}
          >
            <GiHamburgerMenu className="text-2xl" />
          </span>
        </div>
        <div className="item flex gap-4 items-center mb-3 text-[1.1rem] p-2 hover:bg-primaryColor rounded-md">
          <span className="">
            <MdOutlineDashboard className="text-[1.4rem]" />
          </span>
          <a href="" className="text-[#ffffffc0]">
            Overview
          </a>
        </div>
        <div className="item flex flex-col mb-3 text-[1.1rem]  rounded-md">
          <div
            onClick={() => setShowUsersSubmenu(!showUsersSubmenu)}
            className="flex gap-2 items-center cursor-pointer hover:bg-primaryColor rounded-md p-2"
          >
            <div className="flex gap-3 items-center cursor-pointer rounded-md w-[100%] justify-between ">
              <div className="flex-1 w-[100%] flex gap-4 items-center cursor-pointer ">
                <span>
                  <FaUsers className="text-[1.4rem]" />
                </span>
                <span className="text-[#ffffffc0]">Users</span>
              </div>

              {showUsersSubmenu ? (
                <MdKeyboardArrowUp className="text-gray-300 flex-3 text-2xl" />
              ) : (
                <MdKeyboardArrowDown className="text-gray-300 flex-3 text-2xl" />
              )}
            </div>
          </div>
          {showUsersSubmenu && (
            <div className="ml-10 mt-1 flex flex-col gap-1 text-sm text-gray-300 text-[1.1rem]">
              <a href="" className="mb-1.5">
                All Users
              </a>
              <a href="" className="mb-1.5">
                Drivers
              </a>
              <a href="" className="mb-1.5">
                Mechanics
              </a>
            </div>
          )}
        </div>
        <div className="item flex flex-col mb-3 text-lg text-[1.1rem] rounded-md">
          <div
            onClick={() => setShowVehiclesSubmenu(!showVehiclesSubmenu)}
            className="flex gap-2 items-center cursor-pointer hover:bg-primaryColor p-2 rounded-md"
          >
            <div className="flex gap-3 items-center cursor-pointer w-[100%] justify-between ">
              <div className="flex-1 w-[100%] flex gap-4 items-center cursor-pointer">
                <span>
                  <FaCar className="text-[1.4rem]" />
                </span>
                <span className="text-[#ffffffc0]">Veichles</span>
              </div>

              {showVehiclesSubmenu ? (
                <MdKeyboardArrowUp className="text-gray-300 flex-3 text-2xl" />
              ) : (
                <MdKeyboardArrowDown className="text-gray-300 flex-3 text-2xl" />
              )}
            </div>
          </div>
          {showVehiclesSubmenu && (
            <div className="ml-10 mt-1 flex flex-col text-[1.1rem] gap-1 text-sm text-gray-300">
              <a href="" className="mb-1.5">
                All Veichles
              </a>
              <a href="" className="mb-1.5">
                Add Veichles
              </a>
              <a href="" className="mb-1.5">
                Veichles Logs
              </a>
            </div>
          )}
        </div>
        <div className="item flex gap-4 items-center mb-3 p-2 text-[1.1rem] hover:bg-primaryColor rounded-md">
          <span>
            <AiOutlinePlusCircle className="text-[1.4rem]" />
          </span>
          <a href="" className="text-[#ffffffc0]">
            Add
          </a>
        </div>
      </div>
      <div className="down flex items-center gap-4 justify-start w-[100%] bg-[#ffffff21] text-center px-3 py-1 rounded-lg mb-9 cursor-pointer hover:bg-stone-700 transition duration-300 ">
        <span>
          <MdLogout className="text-[1.4rem]" />
        </span>
        <a href="" className="text-[1.1rem]">
          Logout
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
