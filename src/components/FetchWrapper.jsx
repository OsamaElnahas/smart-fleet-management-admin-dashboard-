import React from "react";
import Loader from "./Loader/Loader";
import { filter } from "lodash";

export default function FetchWrapper({ isLoading, isError, error, data, children,filter }) {
  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return (
      <div className="text-center text-2xl text-primaryColor mt-28">
        {error?.message || "An error occurred while fetching data."}
      </div>
    );
  }

  if (data && data.length === 0 || filter.length==0) {
    return (
      <div className="text-center text-2xl text-primaryColor mt-28">
        No Data Found
      </div>
    );
  }

  return children;
}
