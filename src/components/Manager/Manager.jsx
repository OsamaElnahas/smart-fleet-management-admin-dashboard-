import React from "react";
import { Link } from "react-router-dom";
import AllUsersTable from "../AllUsersTable/AllUsersTable";

export default function Manager() {
  return (
    <>
      <Link
        to={"/users/managers/add"}
        className="block mb-12 border border-primaryColor w-[180px] p-2 text-center rounded-lg text-primaryColor font-bold"
      >
        + Add Manager
      </Link>
      <div>
        <AllUsersTable />
      </div>
    </>
  );
}
