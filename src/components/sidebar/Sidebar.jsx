import React from "react";
import { useState } from "react";
import { FaUsers, FaCar, FaHome } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdLogout } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = ({ isVisable, handleToggle }) => {
  const navigate = useNavigate();
  const [showUsersSubmenu, setShowUsersSubmenu] = useState(false);
  const [showVehiclesSubmenu, setShowVehiclesSubmenu] = useState(false);
  const [isActive, setisActive] = useState(false);
  // function handleToggle (){

  //   setisVisable(!isVisable);
  // }
  const handleClick = () => {
    setisActive(!isActive);
  };
  function handleLogout() {
    localStorage.clear();
    navigate("/login");

  }
  console.log(isVisable);
  return (
    <div
      className={`bg-[#191919] min-h-[100vh] text-white flex flex-col justify-between px-5 py-10 font-Inter w-[280px] z-[3000] fixed transition-transform duration-400 ${
        isVisable ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {" "}
      <div className="up w-[100%]">
        <div className="title text-[1.3rem] flex gap-3 items-center text-stone-100 mb-14">
          <div className="flex-1">
            <span className=" font-extrabold">VEE </span>MANAGE
          </div>
          <span
            className="text-[1.5rem] text-stone-100 cursor-pointer hover:scale-125 transition duration-300"
            onClick={handleToggle}
          >
            <GiHamburgerMenu className="text-2xl" />
          </span>
        </div>
        <NavLink
          to="Overview"
          className={({ isActive }) =>
            `${
              isActive ? "bg-primaryColor " : ""
            } item flex gap-4 items-center mb-3 text-[1.1rem] p-2 hover:bg-stone-700 rounded-md`
          }
        >
          <span>
            <MdOutlineDashboard className="text-[1.4rem]" />
          </span>
          Overview
        </NavLink>
        <div className="item flex flex-col mb-3 text-[1.1rem] rounded-md ">
          <div
            onClick={() => setShowUsersSubmenu(!showUsersSubmenu)}
            className="flex gap-2 items-center cursor-pointer hover:bg-stone-700 rounded-md p-2 "
          >
            <div className="flex gap-3 items-center cursor-pointer rounded-md w-full justify-between ">
              <div className="flex-1 flex gap-4 items-center cursor-pointer">
                <span>
                  <FaUsers className="text-[1.4rem]" />
                </span>
                <span className="text-[#ffffffc0]">Users</span>
              </div>
              {showUsersSubmenu ? (
                <MdKeyboardArrowUp className="text-gray-300 text-2xl" />
              ) : (
                <MdKeyboardArrowDown className="text-gray-300 text-2xl" />
              )}
            </div>
          </div>

          <div
            className={` mt-1 flex flex-col border-l border-stone-700   gap-1 ml-12 pl-2 text-sm text-gray-300 text-[1.1rem] overflow-hidden transition-[max-height] duration-300 ${
              showUsersSubmenu ? "max-h-40" : "max-h-0"
            }`}
          >
            {" "}
            <NavLink
              to={"/users/drivers"}
              className={({ isActive }) =>
                `${
                  isActive ? "bg-stone-700" : ""
                } mb-1.5 hover:bg-stone-700 p-2 rounded-md`
              }
            >
              Drivers
            </NavLink>
            <NavLink
              to={"/users/mechanics"}
              className={({ isActive }) =>
                `${
                  isActive ? "bg-stone-700" : ""
                } mb-1.5 hover:bg-stone-700 p-2 rounded-md`
              }
            >
              Mechanics
            </NavLink>
            <NavLink
              to={"/users/managers"}
              className={({ isActive }) =>
                `${
                  isActive ? "bg-stone-700" : ""
                } mb-1.5 hover:bg-stone-700 p-2 rounded-md`
              }
            >
              Managers
            </NavLink>
          </div>
        </div>
        <div className="item flex flex-col mb-3 text-[1.1rem] rounded-md ">
          <NavLink
            to={"/vehicles"}
            className={({ isActive }) =>
              `${
                isActive ? "bg-stone-700" : ""
              } flex  flex-1  gap-4  items-center cursor-pointer hover:bg-stone-700 rounded-md p-2`
            }
          >
            <span>
              <FaCar className="text-[1.4rem]" />
            </span>
            Vehicles
          </NavLink>

          <div
            className={` mt-1 flex flex-col border-l border-stone-700   gap-1 ml-12 pl-2 text-sm text-gray-300 text-[1.1rem] overflow-hidden transition-[max-height] duration-300 ${
              showVehiclesSubmenu ? "max-h-40" : "max-h-0"
            }`}
          ></div>
        </div>
      </div>
      <button  className="py-2 down flex items-center gap-4 justify-start px-2 text-center bg-[#ffffff21]  w-[100%] rounded-lg mb-9 cursor-pointer hover:bg-stone-700 transition duration-300 " onClick={()=> handleLogout()}>
        <span>
          <MdLogout className="text-[1.4rem]" />
        </span>
          Logout
        </button>
    </div>
  );
};

export default Sidebar;
