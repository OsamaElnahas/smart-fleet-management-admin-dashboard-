import React from "react";
import { Link } from "react-router";
import AllUsersTable from "../AllUsersTable/AllUsersTable";
import { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import FetchWrapper from "../FetchWrapper";
import Search from "../Search";
import { FiSearch } from "react-icons/fi"; // أيقونة بحث من react-icons

export default function Vehicles() {
  const [searchItem,setSearchItem]=useState("")
  const[PageSize,setPageSize]=useState(12)
  const[PageIndex,setPageIndex]=useState(1)

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["vehicles", PageSize, PageIndex, searchItem],
    queryFn: getVehicles,
  });

  async function getVehicles() {
    try {
      const response = await axios.get(
        "https://veemanage.runasp.net/api/Vehicle",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          params: {
            PageSize: PageSize,
            PageIndex: PageIndex,
            Search: searchItem,
          },
        }
      );
      console.log("Vehicles data:", response);
      return response;
    } catch (error) {
      console.error("Error fetching vehicles:", error);
      throw error;
    }
  }

  // data && console.log("Vehicles data:", data);
  // const filterUsers = data?.data.filter(
  //   (item) =>
  //     (item.firstName + " " + item.lastName)
  //       .toLowerCase()
  //       .includes(searchItem.toLowerCase()) ||
  //     item.nationalId.includes(searchItem) ||
  //     item.phoneNumber.includes(searchItem)
  // );

  return (
    <>
      <div className="text-center mb-7 w-[100%] py-[0.5rem]   bg-stone-200 text-stone-700 border border-stone-300   rounded-md shadow-sm font-semibold text-xl">
        Vehicles
      </div>
      <div className="controls flex justify-between items-center mb-8">
        <div className="btns flex gap-5 ">
          <Link
            to={"/vehicles/add"}
            className="block  border border-primaryColor w-[180px] p-2 text-center rounded-lg text-primaryColor hover:text-blue-700 transition font-bold"
          >
            + Add Vehicle
          </Link>
          <Link
            to={"/vehicles/categories"}
            className="block  border bg-primaryColor hover:bg-blue-600 transition text-white w-[180px] p-2 text-center rounded-lg font-bold"
          >
            Categories
          </Link>
          <Link
            to={"/vehicles/model"}
            className="block  border bg-primaryColor hover:bg-blue-600 transition text-white w-[180px] p-2 text-center rounded-lg font-bold"
          >
            Models
          </Link>
        </div>
        <Search
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setSearchItem(e.target.value);
            }
          }}
        />
      </div>

      <div>
        <FetchWrapper
          isLoading={isLoading}
          isError={isError}
          error={error}
          data={data?.data}
        >
          <AllUsersTable
            keyOfQuery={"vehicles"}
            baseUrl="https://veemanage.runasp.net/api/Vehicle"
            titles={["ID", "Model", "Palet Number", "Joind Year", "Category"]}
            rows={data?.data.map((item, index) => ({
              link: `/VehiclesProfile/${item.id}`,
              id: item.id,
              values: [
                index + 1,
                item.name,
                item.palletNumber,
                new Date(item.joinedYear,).toLocaleDateString("en-GB", {
        year: "numeric",}),
                
                item.category,
              ],
            }))}
            columnSizes={["10%", "28%", "20%", "20%", "19%", "3%"]}
          />
        </FetchWrapper>
      </div>
           {data?.length>0 &&
          
         <div className="pagination  flex justify-center gap-10 items-center mt-5 mb-5">
        <button className="bg-primaryColor text-white p-2 rounded-md w-[140px] cursor-pointer hover:bg-blue-800" onClick={() => setPageIndex(PageIndex - 1)} disabled={PageIndex === 1}>Previous</button>
        <span>{PageIndex}</span>
        <button className="bg-primaryColor text-white p-2 rounded-md w-[140px] cursor-pointer hover:bg-blue-800" onClick={() => setPageIndex(PageIndex + 1)} disabled={data?.length < PageSize}>Next</button>
      </div>
}
   
    </>
  );
}
