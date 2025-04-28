import React from "react";
import CheckStatus from "../Checker";
import { Link } from "react-router";

const Popup = ({ message, onClose,onConfirm, email, password ,isLoading,link}) => {
  console.log(isLoading);
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
      <div className="bg-white rounded-xl py-10  shadow-xl max-w-sm w-full  flex flex-col items-center gap-4">
        {/* <h2 className="text-xl font-semibold mb-4">Popup Message</h2> */}
        {message&&<p className="mb-10 font-semibold text-lg text-primaryColor">{message} </p>}

        {email &&password &&<CheckStatus status={isLoading?"loading" : email &&password ? "success":"error"}/>}
        {email&&password && <div className="text-black  flex flex-col gap-4 justify-start mt-8">
           <p>
            <span className="font-bold text-primaryColor">Email:</span> {email}
          </p>
          <p>
            <span className="font-bold text-primaryColor">Password:</span>{" "}
            {password}
          </p>
          <Link
          to={link}
            onClick={onClose}
            className="p-2 w-[100px] text-center bg-yellow-500 mt-5 ml-auto text-black rounded-lg hover:bg-yellow-400 transition"
          >
            Done
          </Link>
        </div>
}
  {message&&
  
        <div className="btns flex gap-10 align-center">
          <button
            onClick={onConfirm}
            className="p-2 w-[100px] bg-primaryColor text-white rounded-lg hover:bg-blue-700 hover:text-white  transition"
            >
            Yes
            </button>
          <button
            onClick={onClose}
            className="p-2 w-[100px] bg-red-400 text-white rounded-lg hover:bg-red-600 hover:text-white  transition"
            >
            Close
            </button>
        </div>
            }
      </div>
    </div>
  );
};

export default Popup;
