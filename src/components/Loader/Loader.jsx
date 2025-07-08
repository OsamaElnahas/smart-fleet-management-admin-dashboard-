import React from "react";
import { ColorRing } from "react-loader-spinner";

const Loader = () => {
  return <>
    <div className="flex justify-center z-[4000] ">
    <ColorRing
  visible={true}
  height="80px"
  width="150px"
  ariaLabel="color-ring-loading"
  wrapperStyle={{}}
  wrapperClass="color-ring-wrapper"
  colors={["#3B82F6", "#3B82F6", "#3B82F6", "#3B82F6", "#3B82F6"]}
/>

                    </div>
  </>
};

// <div className="flex justify-center items-center h-screen opacity-40">
//   <div className="w-20 h-20 border-4 border-primaryColor border-dashed rounded-full  animate-spin"></div>
// </div>
export default Loader;
