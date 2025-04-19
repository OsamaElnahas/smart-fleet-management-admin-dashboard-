import React from "react";
import { useState } from "react";
import { FaUsers, FaCar, FaHome } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdLogout } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Sidebar = ({ isVisable, handleToggle }) => {
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
  className={`bg-[#191919] min-h-[100vh] text-white flex flex-col justify-between px-5 py-10 font-Inter w-[280px] z-[3000] fixed transition-transform duration-400 ${
    isVisable ? "translate-x-0" : "-translate-x-full"
  }`}
>      <div className="up w-[100%]">
        <div className="title text-[1.3rem] flex gap-3 items-center text-stone-100 mb-14">
          <div className="flex-1">
            <span className=" font-extrabold">VEE </span>MANAGE
          </div>
          <span className="text-[1.5rem] text-stone-100 cursor-pointer hover:scale-125 transition duration-300" onClick={handleToggle}>
            <GiHamburgerMenu className="text-2xl" />
          </span>
        </div>
        <NavLink
          to="Overview"
          className={({ isActive }) =>
          `${isActive ? "bg-primaryColor " : ""} item flex gap-4 items-center mb-3 text-[1.1rem] p-2 hover:bg-stone-700 rounded-md`
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
  >      <NavLink
        to={"/users/drivers"}
        className={({ isActive }) =>
          `${isActive ? "bg-stone-700" : ""} mb-1.5 hover:bg-stone-700 p-2 rounded-md`
        }
      >
        Drivers
      </NavLink>
      <NavLink
        to={"/users/mechanics"}
        className={({ isActive }) =>
          `${isActive ? "bg-stone-700" : ""} mb-1.5 hover:bg-stone-700 p-2 rounded-md`
        }
      >
        Mechanics
      </NavLink>
      <NavLink
        to={"/users/managers"}
        className={({ isActive }) =>
          `${isActive ? "bg-stone-700" : ""} mb-1.5 hover:bg-stone-700 p-2 rounded-md`
        }
      >
        Managers
      </NavLink>
    </div>
  </div>
<div className="item flex flex-col mb-3 text-[1.1rem] rounded-md ">
  <div
    onClick={() => setShowVehiclesSubmenu(!showVehiclesSubmenu)}
    className="flex gap-2 items-center cursor-pointer hover:bg-stone-700 rounded-md p-2 "
  >
    <div className="flex gap-3 items-center cursor-pointer rounded-md w-full justify-between ">
      <div className="flex-1 flex gap-4 items-center cursor-pointer">
        <span>
          <FaCar className="text-[1.4rem]" />
        </span>
        <span className="text-[#ffffffc0]">Vehicles</span>
      </div>
      {showVehiclesSubmenu ? (
        <MdKeyboardArrowUp className="text-gray-300 text-2xl" />
      ) : (
        <MdKeyboardArrowDown className="text-gray-300 text-2xl" />
      )}
    </div>
  </div>

 
  <div
    className={` mt-1 flex flex-col border-l border-stone-700   gap-1 ml-12 pl-2 text-sm text-gray-300 text-[1.1rem] overflow-hidden transition-[max-height] duration-300 ${
      showVehiclesSubmenu ? "max-h-40" : "max-h-0"
    }`}
  >      <NavLink
        to={"/users/cars"}
        className={({ isActive }) =>
          `${isActive ? "bg-stone-700" : ""} mb-1.5 hover:bg-stone-700 p-2 rounded-md`
        }
      >
        Cars
      </NavLink>
      <NavLink
        to={"/users/heavyCars"}
        className={({ isActive }) =>
          `${isActive ? "bg-stone-700" : ""} mb-1.5 hover:bg-stone-700 p-2 rounded-md`
        }
      >
        Heavy cars
      </NavLink>
    </div>
  </div>

        
      <NavLink 
      to={"/add"}
        className= {({ isActive }) =>
          `${isActive ? "bg-stone-700" : ""} rounded-md item flex gap-4 items-center mb-3 p-2 text-[1.1rem] hover:bg-stone-700`}
           >
           <span>
            <AiOutlinePlusCircle className="text-[1.4rem]"/>
          </span>
            Add
          </NavLink>

      </div>
            <div className="down flex items-center gap-4 justify-start w-[100%] bg-[#ffffff21] text-center px-3 py-1 rounded-lg mb-9 cursor-pointer hover:bg-stone-700 transition duration-300 ">
        <span>
          <MdLogout className="text-[1.4rem]" />
        </span>
        <NavLink to={"/Login"} className="text-[1.1rem]">
          Logout
        </NavLink>
    </div>
    </div>
  );
};

export default Sidebar;
