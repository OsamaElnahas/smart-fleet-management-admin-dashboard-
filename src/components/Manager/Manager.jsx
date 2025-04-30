import React, { useState } from "react";
import { Link } from "react-router-dom";
import AllUsersTable from "../AllUsersTable/AllUsersTable";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import FetchWrapper from "../FetchWrapper";

export default function Manager() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["managers"],
    queryFn: () =>
      getDataOfUsers("http://veemanage.runasp.net/api/User/managers"),
  });

  async function getDataOfUsers(api) {
    try {
      const res = await axios.get(api, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      return res?.data;
    } catch (error) {
      // console.error("Error fetching users:", error);
      return [];
    }
  }
  // console.log("manager data:", data && data);
  // isError && console.log("error from query", error?.message);

  return (
    <>
      <div className="text-center mb-7 w-[100%] py-[0.5rem]  bg-stone-200 text-stone-700 border border-stone-300   rounded-md shadow-sm font-semibold text-xl">
        Managers
      </div>
      <Link
        to={"/users/managers/add"}
        className="block mb-8 border border-primaryColor w-[180px] p-2 text-center rounded-lg text-primaryColor font-bold"
      >
        + Add Manager
      </Link>

      <FetchWrapper
        isLoading={isLoading}
        isError={isError}
        error={error}
        data={data}
      >
        <AllUsersTable
          baseUrl="http://veemanage.runasp.net/api/User"
          keyOfQuery={"managers"}


          titles={[
            "ID",
            "Name",
            "Phone",
            "Email",
            "Date of Birth",
            "National ID",
            // "Address",
          ]}
          rows={data?.map((item, index) => ({
            link: `/ManagerProfile/${item.id}`,
            id:item.id,
            values: [
              index + 1,
              item.firstName +" "+item.lastName,
              item.phoneNumber,
              item.email,
              item.dateOfBirth,
              item.nationalId,
              // item.address?.governorate,
            ],
          }))}
          columnSizes={["8%", "16%", "20%", "20%", "15%", "18%", "3%"]}
        />
      </FetchWrapper>
    </>
  );
}
