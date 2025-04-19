import React from "react";
import { Link } from "react-router-dom";
import AllUsersTable from "../AllUsersTable/AllUsersTable";

export default function Mechans() {
  return (
    <>
      <Link
        to={"/users/mechanics/add"}
        className="block mb-12 border border-primaryColor w-[180px] p-2 text-center rounded-lg text-primaryColor font-bold"
      >
        + Add Mechanic
      </Link>
      <div>
        <AllUsersTable />
      </div>
    </>
  );
}
