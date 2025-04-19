import React from "react";
import { Link } from "react-router-dom";

export default function Manager() {
  return (
    <>
      <Link
        to={"/users/managers/add"}
        className="block mb-12 border border-primaryColor w-[180px] p-2 text-center rounded-lg text-primaryColor font-bold"
      >
        + Add Manager
      </Link>

      <div>Manager will appear here</div>
    </>
  );
}
