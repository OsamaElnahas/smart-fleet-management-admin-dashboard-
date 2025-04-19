import React from "react";
import { NavLink, Link } from "react-router-dom";
import AllUsersTable from "../AllUsersTable/AllUsersTable";

export default function Drivers() {
  return (
    <>
      <Link
        to={"/users/drivers/add"}
        className="block mb-12 border border-primaryColor w-[180px] p-2 text-center rounded-lg text-primaryColor font-bold"
      >
        + Add Driver
      </Link>
      <div>
        <AllUsersTable titles={{col1:"id",

          col2:"Driver Name",
          col3:"Driver Number",
          col4:"Driver Cos",
          col5:"Rating",
          col6:""}} />
        
      </div>
    </>
  );
}
