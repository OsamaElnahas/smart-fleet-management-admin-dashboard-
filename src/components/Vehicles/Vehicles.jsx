import React from "react";
import { Link } from "react-router";
import AllUsersTable from "../AllUsersTable/AllUsersTable";
import { useState } from "react";
import axios from "axios";
import { useQueries, useQuery } from "@tanstack/react-query";

export default function Vehicles() {
  const { data, isLoading } = useQuery({
    queryKey: ["vehicles"],
    queryFn: getVehicles,
  });

  async function getVehicles() {
    try {
      const response = await axios.get(
        "http://veemanage.runasp.net/api/Vehicle"
      );
      return response?.data;
    } catch (error) {
      console.error("Error fetching vehicles:", error);
      return error;
    }
  }
  data && console.log("Vehicles data:", data);
  return (
    <>
      <div className="controls">
        <div className="btns flex gap-5">
          <Link
            to={"/vehicles/add"}
            className="block mb-12 border border-primaryColor w-[180px] p-2 text-center rounded-lg text-primaryColor font-bold"
          >
            + Add Vehicle
          </Link>
          <Link
            to={"/vehicles/categories"}
            className="block mb-12 border bg-primaryColor text-white w-[180px] p-2 text-center rounded-lg font-bold"
          >
            Categories
          </Link>
          <Link
            to={"/vehicles/model"}
            className="block mb-12 border bg-primaryColor text-white w-[180px] p-2 text-center rounded-lg font-bold"
          >
            Models
          </Link>
        </div>
      </div>

      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <AllUsersTable
            titles={["ID", "Model", "Palet Number", "Joind Year", "Category"]}
            rows={data?.map((item, index) => [
              index + 1,
              item.name,
              item.palletNumber,
              item.joindYear,
              item.category,
            ])}
            columnSizes={["10%", "25%", "20%", "20%", "15%", "10%"]}
          />
        )}
      </div>
    </>
  );
}
