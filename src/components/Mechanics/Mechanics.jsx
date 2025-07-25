import React, { useState } from "react";
import { Link } from "react-router-dom";
import AllUsersTable from "../AllUsersTable/AllUsersTable";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader/Loader";
import FetchWrapper from "../FetchWrapper";
import Search from "../Search";

export default function Mechans() {
  const [searchItem, setSearchItem] = useState("");

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["mechanics"],
    queryFn: getDataOfUsers,
  });
  async function getDataOfUsers() {
    try {
      const res = await axios.get(
        "https://veemanage.runasp.net/api/User/all/mechanic",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      // console.log("mechanic data", res?.data);
      return res?.data;
    } catch (error) {
      // console.error("Error fetching users:", error);
      return [];
    }
  }
  const filterUsers = data?.filter(
    (item) =>
      (item.firstName + " " + item.lastName)
        .toLowerCase()
        .includes(searchItem.toLowerCase()) ||
      item.nationalId.includes(searchItem) ||
      item.phoneNumber.includes(searchItem)
  );

  return (
    <>
      <div className="text-center mb-7 w-[100%] py-[0.5rem]  bg-stone-200 text-stone-700 border border-stone-300   rounded-md shadow-sm font-semibold text-xl">
        Mechanics
      </div>
      <div className="flex mb-8 justify-between items-center">
        <Link
          to={"/users/mechanics/add"}
          className="block  border border-primaryColor w-[180px] p-2 text-center rounded-lg text-primaryColor hover:text-blue-700 font-bold"
        >
          + Add Mechanic
        </Link>
        <Search onChange={(e) => setSearchItem(e.target.value)} />
      </div>

      <FetchWrapper
        isLoading={isLoading}
        isError={isError}
        error={error}
        data={data}
        filter={filterUsers}
      >
        <AllUsersTable
          keyOfQuery={"mechanics"}
          baseUrl="https://veemanage.runasp.net/api/User"
          titles={[
            "ID",
            "Name",
            "Phone",
            "Email",
            "Date of Birth",
            "National ID",
          ]}
          rows={
            filterUsers
              ? filterUsers?.map((item, index) => ({
                  link: `/ManagerProfile/${item.id}`,
                  id: item.id,
                  values: [
                    index + 1,
                    item.firstName + " " + item.lastName,
                    item.phoneNumber,
                    item.email,
                    item.dateOfBirth,
                    item.nationalId,
                    // item.address?.governorate,
                  ],
                }))
              : data?.map((item, index) => ({
                  link: `/ManagerProfile/${item.id}`,
                  id: item.id,
                  values: [
                    index + 1,
                    item.firstName + " " + item.lastName,
                    item.phoneNumber,
                    item.email,
                    item.dateOfBirth,
                    item.nationalId,
                    // item.address?.governorate,
                  ],
                }))
          }
          columnSizes={["8%", "16%", "20%", "20%", "15%", "18%", "3%"]}
        />
      </FetchWrapper>
    </>
  );
}
