import React from "react";

const Popup = ({ message, onClose, email, password }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 ">
      <div className="bg-white rounded-xl p-6 shadow-xl max-w-sm w-full flex flex-col items-center gap-4">
        {/* <h2 className="text-xl font-semibold mb-4">Popup Message</h2> */}
        <p className="mb-6 font-semibold text-lg text-green-600">{message} </p>
        <div className="text-black text-center">
          <p>
            <span className="font-bold text-primaryColor">Email:</span> {email}
          </p>
          <p>
            <span className="font-bold text-primaryColor">Password:</span>{" "}
            {password}
          </p>
        </div>
        <div className="btns flex gap-4 align-center">
          <button
            onClick={onClose}
            className="p-2 w-[100px] bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition"
          >
            Done
          </button>
          {/* <button
            onClick={onClose}
            className="p-2 w-[100px] bg-red-400 text-white rounded-lg hover:bg-blue-700 hover:text-white  transition"
          >
            Close
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Popup;
