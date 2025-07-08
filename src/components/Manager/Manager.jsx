import React, { useState } from "react";
import { Link } from "react-router-dom";
import AllUsersTable from "../AllUsersTable/AllUsersTable";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import FetchWrapper from "../FetchWrapper";
import { FaSearch } from "react-icons/fa";
import Search from "../Search";

export default function Manager() {
  const [searchItem,setSearchItem]=useState("")
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["managers"],
    queryFn: () =>
      getDataOfUsers("https://veemanage.runasp.net/api/User/all/manager"),
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
  const filterUsers = data?.filter((item) =>
    (item.firstName + " " + item.lastName).toLowerCase().includes(searchItem.toLowerCase()) || item.nationalId.includes(searchItem) || item.phoneNumber.includes(searchItem)

  );
  
  console.log("manager data:", data && data);
  console.log("search item",searchItem);
  console.log("filter users",filterUsers);
  // isError && console.log("error from query", error?.message);

  return (
    <>
      <div className="text-center mb-7 w-[100%] py-[0.5rem]  bg-stone-200 text-stone-700 border border-stone-300   rounded-md shadow-sm font-semibold text-xl">
        Managers
      </div>
      <div className="flex items-center justify-between mb-8">

      <Link
        to={"/users/managers /add"}
        className="block  border border-primaryColor w-[180px] p-2 text-center rounded-lg text-primaryColor font-bold"
        >
        + Add Manager
      </Link>
      <Search onChange={(e)=>
        setSearchItem(e.target.value)
      } />
        </div>

      <FetchWrapper
        isLoading={isLoading}
        isError={isError}
        error={error}
        data={data}
        filter={filterUsers}
      >
        <AllUsersTable
          baseUrl="https://veemanage.runasp.net/api/User"
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
          rows={
            filterUsers? filterUsers?.map((item, index) => ({
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
            }))
            
            :
            
            data?.map((item, index) => ({
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
          }))}
          columnSizes={["8%", "16%", "20%", "20%", "15%", "18%", "3%"]}
        />
      </FetchWrapper>
    </>
  );
}
