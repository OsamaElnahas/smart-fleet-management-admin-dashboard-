import React from "react";
import CheckStatus from "../Checker";
import { Link } from "react-router-dom";

const Popup = ({ message, onClose, onConfirm, email, password, isLoading, link ,status}) => {
  const showUserInfo = email && password;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-xl py-10 px-6 shadow-xl max-w-sm w-full flex flex-col items-center gap-6">
        {isLoading && <CheckStatus status={"loading"}/>}
        
        {message && (
          <>
            <p className="text-lg font-semibold text-primaryColor text-center">{message}</p>
          </>
        )}

        {showUserInfo && (
          <>
            <CheckStatus status={isLoading ? "loading" : "success"} />
            <div className="text-black flex flex-col gap-3 justify-start mt-4 w-full">
              <p>
                <span className="font-bold text-primaryColor">Email:</span> {email}
              </p>
              <p>
                <span className="font-bold text-primaryColor">Password:</span> {password}
              </p>
              <Link
                to={link}
                onClick={onClose}
                className="p-2 w-full text-center bg-yellow-500 mt-5 text-black rounded-lg hover:bg-yellow-400 transition"
              >
                Done
              </Link>
            </div>
          </>
        )}
        {status&&<>
        
          <CheckStatus status={status===true ? "success" :"error"}/>
          <button
              onClick={onClose}
              className="p-2 w-[100px] mt-12 bg-primaryColor text-white rounded-lg hover:bg-blue-700 transition"
            >
              Done
            </button>
        </>
          
        
        }

        {message && !showUserInfo && (
          <div className="btns flex gap-6 mt-6">
            <button
              onClick={onConfirm}
              className="p-2 w-[100px] bg-primaryColor text-white rounded-lg hover:bg-blue-700 transition"
            >
              Yes
            </button>
            <button
              onClick={onClose}
              className="p-2 w-[100px] bg-red-400 text-white rounded-lg hover:bg-red-600 transition"
            >
              Close
            </button>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Popup;
