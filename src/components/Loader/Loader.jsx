import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen opacity-40">
      <div className="w-20 h-20 border-4 border-primaryColor border-dashed rounded-full  animate-spin"></div>
    </div>
  );
};

export default Loader;
