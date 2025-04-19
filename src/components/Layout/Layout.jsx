import React, { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [isVisable, setisVisable] = useState(true);

  function handleToggle() {
    setisVisable(!isVisable);
  }

  return (
    <div className="   bg-[#f4f4f4] min-h-screen">
      <Sidebar isVisable={isVisable} handleToggle={handleToggle} />
      <div
        className={`content  transition-all duration-300 ${
          isVisable ? "md:ml-[280px] " : "ml-0"
        }`}
      >
        <Navbar isVisable={isVisable} handleToggle={handleToggle} />
        <div className="main-content p-4 md:p-4 md:px-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
