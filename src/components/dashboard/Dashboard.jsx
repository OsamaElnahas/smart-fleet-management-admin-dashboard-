import React from "react";
import MyCalendar from "../Calendar/MyCalendar";
import StatisticsChart from "../Statistcs/Statistcs";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader/Loader";
// import DateTimePicker from '../Calendar/Calendar';
// import Calendar from '../Calendar/Calendar.jsx';
// import MyCalendar from '..';

const Dashboard = () => {
  const {
    data: Users,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["allUsers"],
    queryFn: () =>
      getDataOfUsers(
        "https://veemanage.runasp.net/api/User/all/users",
        "all users"
      ),
  });
  const { data: Drivers } = useQuery({
    queryKey: ["drivers"],
    queryFn: () =>
      getDataOfUsers(
        "https://veemanage.runasp.net/api/User/all/driver",
        "drivers data"
      ),
  });
  const { data: mechanics } = useQuery({
    queryKey: ["mechanics"],
    queryFn: () =>
      getDataOfUsers(
        "https://veemanage.runasp.net/api/User/all/mechanic",
        "mechanics data"
      ),
  });
  const { data: managers } = useQuery({
    queryKey: ["managers"],
    queryFn: () =>
      getDataOfUsers(
        "https://veemanage.runasp.net/api/User/all/manager",
        "managers data"
      ),
  });
  const { data: Vehicles } = useQuery({
    queryKey: ["Vehicles"],
    queryFn: () =>
      getDataOfUsers(
        "https://veemanage.runasp.net/api/Vehicle",
        "Vehicle data"
      ),
  });

  async function getDataOfUsers(api, message) {
    try {
      const res = await axios.get(api, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log(message, res);

      return res?.data;
    } catch (error) {
      // console.error("Error fetching users:", error);
      return [];
    }
  }
  // async function getAllDrivers(api) {
  //   try{
  //     const res = await axios.get(api, {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //       },}
  //     );
  //     return res?.data;
  //   }
  //   catch (error) {
  //     console.error("Error data:", error);
  //   }
  // }
  // console.log("Users data:", data&&data);

  return (
    <>
      {isLoading && <Loader />}
      <div className="title text-[1.8rem] font-bold mb-10 text-[#212529]">
        Dashboard
      </div>

      <div className="dashboard grid gap-6">
        <div className="grid  md:grid-cols-12 gap-6">
          <div className="cards col-span-12 lg:col-span-6 flex flex-col gap-4 text-sm">
            {/* Users Summary */}
            <div className="card text-white px-5 py-8 rounded-lg shadow-md bg-slate-800 font-semibold grid grid-cols-2 sm:grid-cols-4 gap-6 items-center   text-center">
              <div className="item flex flex-col gap-2">
                <span>All Users</span>
                <span className="text-white text-xl">
                  {Users?.length || "-"}
                </span>
              </div>
              <div className="item flex flex-col gap-2">
                <span>Managers</span>
                <span className="text-white text-xl">
                  {managers?.length || "-"}
                </span>
              </div>
              <div className="item flex flex-col gap-2">
                <span>Drivers</span>
                <span className="text-white text-xl">
                  {Drivers?.length || "-"}
                </span>
              </div>
              <div className="item flex flex-col gap-2">
                <span>Mechanics</span>
                <span className="text-white text-xl">
                  {mechanics?.length || "-"}
                </span>
              </div>
            </div>

            <div className="card h-32 text-gray-600 px-2 py-6 rounded-lg shadow-md bg-[#E8D73E] font-bold flex flex-col gap-2 justify-center items-center text-center">
              <span className="">Vehicles</span>
              <span className="text-xl">{Vehicles?.length || ""}</span>
            </div>

            <div className="card h-32 text-white px-2 py-6 rounded-lg shadow-md bg-[#5041BC] font-semibold flex flex-col gap-2 justify-center items-center text-center">
              <span>New Users</span>
              <span className="text-xl">100</span>
            </div>
          </div>

          {/* <div className="col-span-12 lg:col-span-6 ">
            <StatisticsChart />
          </div> */}
        </div>

        {/* <div className="chart bg-white  rounded-lg shadow-md text-gray-800 mt-4">
            < MyCalendar/>
        </div> */}
      </div>
    </>
  );
};

export default Dashboard;
