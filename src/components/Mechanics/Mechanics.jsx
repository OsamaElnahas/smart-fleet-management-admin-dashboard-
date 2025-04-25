import React from "react";
import { Link } from "react-router-dom";
import AllUsersTable from "../AllUsersTable/AllUsersTable";

export default function Mechans() {
  return <>
      <Link
        to={"/users/mechanics/add"}
        className="block mb-12 border border-primaryColor w-[180px] p-2 text-center rounded-lg text-primaryColor font-bold">
        + Add Mechanic
      </Link>
      <AllUsersTable
       titles={["ID", "Name", "Phone", "Email","Age","Government"]}
      //  rows={data?.map((item, index) => ({
      //   link: `/VehiclesProfile/${item.id}`,
      //   values: [
      //     index + 1,
      //     item.name,
      //     item.palletNumber,
      //     item.joindYear,
      //     item.category,
      //   ],
      // }))}
        rows={[
        ["1", "Osama Kamal", "0100000000", "osamaelnahs1234@gmail.com","22","portsaid" ],["2", "Iman Kamal", "0100111122", "iman@gmail.com","22","portsaid"],
      ]}           columnSizes={["12%", "13%", "22%", "14%", "14%", "15%", "10%"]}
      />
    </>
  
}