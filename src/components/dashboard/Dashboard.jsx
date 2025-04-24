import React from "react";
import MyCalendar from "../Calendar/MyCalendar";
import StatisticsChart from "../Statistcs/Statistcs";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
// import DateTimePicker from '../Calendar/Calendar';
// import Calendar from '../Calendar/Calendar.jsx';
// import MyCalendar from '..';

const Dashboard = () => {

  const {data:Users,isLoading,isError,}=useQuery({
    queryKey: ["allUsers"],
    queryFn: ()=>getDataOfUsers("http://veemanage.runasp.net/api/User/all"),
  });
  const {data:Drivers}=useQuery({
    queryKey: ["drivers"],
    queryFn: ()=>getDataOfUsers("http://veemanage.runasp.net/api/User/drivers"),
  });
  const {data:mechanics}=useQuery({
    queryKey: ["mechanics"],
    queryFn: ()=>getDataOfUsers("http://veemanage.runasp.net/api/User/mechanics"),
  });
  const {data:managers}=useQuery({
    queryKey: ["managers"],
    queryFn: ()=>getDataOfUsers("http://veemanage.runasp.net/api/User/managers"),
  });



  

  async function getDataOfUsers(api) {
    try{

      const res = await axios.get(api, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },}
      );
      return res?.data;
    }
    catch (error) {
      console.error("Error fetching users:", error);
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
      <div className="title text-[1.8rem] font-bold mb-10 text-[#212529]">
        Dashboard
      </div>

      <div className="dashboard grid gap-6">
        <div className="grid  md:grid-cols-12 gap-6">
          <div className="cards col-span-12 lg:col-span-6 flex flex-col gap-4">
            <div className="card   text-white px-2 py-8 rounded-lg shadow-md bg-slate-800 font-bold  flex flex-wrap gap-4  justify-center">
              <div className="item items-center    flex flex-col gap-2 px-1 ">
              <span> All Users</span>
              <div>
                <span>{Users?.length||0}</span>
              </div>
              </div>
              <div className="item items-center flex flex-col gap-2 px-1 ">
              <span> Managers</span>
              <div>
                <span>{managers?.length||0}</span>
              </div>
              </div>
              <div className="item items-center flex flex-col gap-2 px-1  ">
              <span> Drivers</span>
              <div>
                <span>{Users?.length||0}</span>
              </div>
              </div>
              <div className="item items-center flex flex-col gap-2">
              <span> Mechanics</span>
              <div>
                <span>{Users?.length||0}</span>
              </div>
              </div>
            </div>

            <div className="card h-32 text-black px-2 py-4 rounded-lg shadow-md bg-[#E8D73E] font-bold">
              <span> New Users</span>
              <div className="mt-1.5">
                <span className="">1,156</span>
              </div>
            </div>
            <div className="card h-32 text-white px-2 py-4 rounded-lg shadow-md bg-[#5041BC] font-bold">
              <span> New Users</span>
              <div>
                <span>1,156</span>
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 ">
            <StatisticsChart />
          </div>
        </div>

        {/* <div className="chart bg-white  rounded-lg shadow-md text-gray-800 mt-4">
            < MyCalendar/>
        </div> */}
      </div>
    </>
  );
};

export default Dashboard;
