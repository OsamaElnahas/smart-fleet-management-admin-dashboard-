import React from "react";
import { Link } from "react-router";
import AllUsersTable from "../AllUsersTable/AllUsersTable";
import { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import FetchWrapper from "../FetchWrapper";
import Search from "../Search";

export default function Vehicles() {
  const [searchItem,setSearchItem]=useState("")

  const { data, isLoading,isError,error } = useQuery({
    queryKey: ["vehicles"],
    queryFn: getVehicles,
  });

  async function getVehicles() {
    try {
      const response = await axios.get(
        "https://veemanage.runasp.net/api/Vehicle"
      );
      return response?.data;
    } catch (error) {
      console.error("Error fetching vehicles:", error);
      return error;
    }
  }
  // data && console.log("Vehicles data:", data);
  const filterUsers = data?.filter((item) =>
    (item.firstName + " " + item.lastName).toLowerCase().includes(searchItem.toLowerCase()) || item.nationalId.includes(searchItem) || item.phoneNumber.includes(searchItem)

  );


  return (
    <>
      <div className="text-center mb-7 w-[100%] py-[0.5rem]   bg-stone-200 text-stone-700 border border-stone-300   rounded-md shadow-sm font-semibold text-xl">
        Vehicles
    </div>
      <div className="controls flex justify-between items-center mb-8">
        <div className="btns flex gap-5 ">

          <Link
            to={"/vehicles/add"}
            className="block  border border-primaryColor w-[180px] p-2 text-center rounded-lg text-primaryColor font-bold"
          >
            + Add Vehicle
          </Link>
          <Link
            to={"/vehicles/categories"}
            className="block  border bg-primaryColor text-white w-[180px] p-2 text-center rounded-lg font-bold"
          >
            Categories
          </Link>
          <Link
            to={"/vehicles/model"}
            className="block  border bg-primaryColor text-white w-[180px] p-2 text-center rounded-lg font-bold"
          >
            Models
          </Link>
        </div>
        <Search onChange={(e)=>
        setSearchItem(e.target.value)
      } />
      </div>

      <div>
        <FetchWrapper isLoading={isLoading} isError={isError} error={error} data={data}   filter={filterUsers}>
          <AllUsersTable
            keyOfQuery={"vehicles"}
            baseUrl="https://veemanage.runasp.net/api/Vehicle"

          titles={["ID", "Model", "Palet Number", "Joind Year", "Category"]}
          rows={
            filterUsers?filterUsers.map((item, index) => ({
              link: `/VehiclesProfile/${item.id}`,
              id:item.id,

              values: [
                index + 1,
                item.name,
                item.palletNumber,
                item.joindYear,
                item.category,
              ],
            }))
            
            
            
            :data?.map((item, index) => ({
            link: `/VehiclesProfile/${item.id}`,
            id:item.id,
            values: [
              index + 1,
              item.name,
              item.palletNumber,
              item.joindYear,
              item.category,
            ],
          }))}
          columnSizes={["10%", "28%", "20%", "20%", "19%", "3%"]}
        />

        </FetchWrapper>
      </div>
    </>
  );
}
