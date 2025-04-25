import React, { useState } from "react";
import { Link } from "react-router-dom";
import AllUsersTable from "../AllUsersTable/AllUsersTable";
import Loader from "../Loader/Loader";
import Popup from "../PopUp/PopUp";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function Manager() {
  const [showPopup, setShowPopup] = useState(true);
  const { data, isLoading } = useQuery({
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
      console.error("Error fetching users:", error);
      return [];
    }
  }
  console.log("Users data:", data && data);
  console.log("form magner",data&& data[0]?.email);


  return (
    <>
      {!data && <Loader />}
      <Link
        to={"/users/managers/add"}
        className="block mb-12 border border-primaryColor w-[180px] p-2 text-center rounded-lg text-primaryColor font-bold"
      >
        + Add Manager
      </Link>
      {isLoading ? (
        <Loader />
      ) : (
        <AllUsersTable
        link={"/ManagersProfile"}
          // ids={data.map((item) => item.id)}
          titles={[
            "ID",
            "Name",
            "Phone",
            "Email",
            "Date of Birth",
            "National ID",
            "Government",
          ]}
          rows={data?.map((item, index) => ({
            // link: `/ManagersProfile/${item.id}`,
            link: `/ManagersProfile`,
            values: [
              index + 1,
              item.userName,
              item.phoneNumber,
              item.email,
              item.dateOfBirth,
              item.nationalId,
              item.address?.governorate,
            ],
          }))}
          // rows={
          //   data?.map((item) => [
          //     item.userName,
          //     item.phoneNumber,
          //     item.email,
          //     item.dateOfBirth,
          //     item.nationalId,

          //     item.address?.governorate,
          //   ]) || []
          // }
          columnSizes={["5%", "11%", "12%", "20%", "14%", "14%", "14%", "10%"]}
        />
      )}
    </>
  );
}
