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
      <AllUsersTable 
      titles={["ID", "Name", "Phone", "Email","Age","Government"]} rows={[
        ["1", "Osama Kamal", "0100000000", "osamaelnahs1234@gmail.com","22","portsaid" ],["2", "Iman Kamal", "0100111122", "iman@gmail.com","22","portsaid"],
      ]} columnSizes={["10%", "20%", "15%", "25%", "10%", "15%" ,"10%"]} />
    </>
}
