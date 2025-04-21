import React from "react";
import { Link } from "react-router-dom";
import AllUsersTable from "../AllUsersTable/AllUsersTable";

export default function Mechans() {
  return <>
      <Link
        to={"/users/mechanics/add"}
        className="block mb-12 border border-primaryColor w-[180px] p-2 text-center rounded-lg text-primaryColor font-bold">
        + Add Mechanic
      </Link>
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
