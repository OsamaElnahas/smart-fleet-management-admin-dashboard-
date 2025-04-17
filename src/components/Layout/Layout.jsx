import React from "react";
import Sidebar from "../Sidebar/sidebar";

const Layout = () => {
  return (
    <div className="grid grid-cols-[250px,1fr] ">
      <Sidebar />
      <div className="s-2 bg-[#E8E8E8] min-h-[100vh]">Main Content</div>
    </div>
  );
};

export default Layout;
