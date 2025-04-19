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
        <AllUsersTable />
      </div>
    </>
  );
}
