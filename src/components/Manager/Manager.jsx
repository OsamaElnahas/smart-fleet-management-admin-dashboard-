import React, { useState } from "react";
import { Link } from "react-router-dom";
import AllUsersTable from "../AllUsersTable/AllUsersTable";
import Loader from "../Loader/Loader";
import Popup from "../PopUp/PopUp";

export default function Manager() {
  const [showPopup, setShowPopup] = useState(true);

  return    <>
     <Link
        to={"/users/managers/add"}
        className="block mb-12 border border-primaryColor w-[180px] p-2 text-center rounded-lg text-primaryColor font-bold"
      >
        + Add Manager
      </Link>
      {/* <Loader /> */}
      {showPopup && (
        <Popup message="Are You Sure to Add This Manager " onClose={() => setShowPopup(false)} />
      )}
      <AllUsersTable titles={{
        col1: "id",
        col2: " Name",
        col3: "Phone",
        col4: "Email",
        col5: "Age",
        col6: "Government",
        col7: " ",
      }} />
    </>
}
