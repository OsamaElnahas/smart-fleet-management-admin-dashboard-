import React, { useState } from "react";
import Sidebar from "../Sidebar/sidebar";

const Layout = () => {
  const [isVisable, setisVisable] = useState(true);

  return (
    <div className={`${isVisable? "grid grid-cols-[250px,1fr]":"grid grid-cols-[1fr]"}`}>
      <Sidebar isVisable={isVisable} setisVisable={setisVisable} />
      <div className="s-2 bg-[#E8E8E8] min-h-[100vh]">Main Content</div>
    </div>
  );
};

export default Layout;
