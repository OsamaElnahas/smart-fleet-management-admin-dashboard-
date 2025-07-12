import React from "react";
import Profile from "../Profile/Profile";
import { useParams } from "react-router";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { FaCar, FaDotCircle, FaToolbox, FaTools } from "react-icons/fa";
// import MaintenanceHistory from '../Maintience/MaintenanceHistory';
import Loader from "../Loader/Loader";

export default function VehiclesProfile() {
  const { id } = useParams();

  async function getVehicleById() {
    try {
      const response = await axios.get(
        `https://veemanage.runasp.net/api/Vehicle/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return response?.data;
    } catch (error) {
      console.error("Error fetching vehicles:", error);
      return error;
    }
  }

  const { data, isLoading } = useQuery({
    queryKey: ["vehicle"],
    queryFn: getVehicleById,
  });
  data && console.log("Vehicles data:", data);
  if (isLoading) return <Loader />;

  return (
    <>
      <div className="container p-2 flex justify-center">
        <div className="w-[90%]">
          <div className="carInfo bg-white p-4 rounded-lg shadow-md col-span-12 lg:col-span-8 mb-4 ">
            <div className="title flex justify-between p-2 border-b-2 border-gray-200">
              <div className="modelName text-blue-500 font-bold text-xl flex items-center gap-3 ">
                <FaCar size={26} /> {data?.vehicleModel?.brand?.name}{" "}
                {data?.vehicleModel?.name}{" "}
              </div>
            </div>
            <div className="details grid md:grid-cols-2 p-2">
              <div className="parentItems">
                <div className="item flex flex-col gap-2 mb-3">
                  <span className=" font-bold">Model Year</span>
                  <span className="text-gray-500">{data?.modelYear}</span>
                </div>

                <div className="item flex flex-col gap-2 mb-3">
                  <span className=" font-bold">Category</span>
                  <span className="text-gray-500">
                    {data?.vehicleModel?.category?.name}
                  </span>
                </div>
                <div className="item flex flex-col gap-2 mb-3">
                  <span className=" font-bold">Current Km</span>
                  <span className="text-gray-500">{data?.currentOdometerKM}</span>
                </div>
                <div className="item flex flex-col gap-2 mb-3">
                  <span className=" font-bold">Engine Size</span>
                  <span className="text-gray-500">
                    {data?.engineSize}
                  </span>
                </div>
              </div>
              <div className="parentItems">
                <div className="item flex flex-col gap-2 mb-3">
                  <span className=" font-bold">Fuel Type</span>
                  <span className="text-gray-500">{data?.fuelType}</span>
                </div>
                <div className="item flex flex-col gap-2 mb-3">
                  <span className=" font-bold">Plate Number</span>
                  <span className="text-gray-500">{data?.palletNumber}</span>
                </div>
                
                <div className="item flex flex-col gap-2 mb-3">
                  <span className=" font-bold">Joined Date</span>
                  <span className="text-gray-500">{data?.joinedYear}</span>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
