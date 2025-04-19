import React from "react";
import MyCalendar from "../Calendar/MyCalendar";
import StatisticsChart from "../Statistcs/Statistcs";
// import DateTimePicker from '../Calendar/Calendar';
// import Calendar from '../Calendar/Calendar.jsx';
// import MyCalendar from '..';

const Dashboard = () => {
  return (
    <>
      <div className="title text-[1.8rem] font-bold mb-10 text-[#212529]">
        Dashboard
      </div>

      <div className="dashboard grid gap-6">
        <div className="grid  md:grid-cols-12 gap-6">
          <div className="cards md:col-span-5 flex flex-col gap-4">
            <div className="card h-32 text-white px-6 py-8 rounded-lg shadow-md bg-slate-800 font-bold">
              <span> New Users</span>
              <div>
                <span>1,156</span>
              </div>
            </div>

            <div className="card h-32 text-black px-6 py-8 rounded-lg shadow-md bg-[#E8D73E] font-bold">
              <span> New Users</span>
              <div className="mt-1.5">
                <span className="">1,156</span>
              </div>
            </div>
            <div className="card h-32 text-white px-6 py-8 rounded-lg shadow-md bg-[#5041BC] font-bold">
              <span> New Users</span>
              <div>
                <span>1,156</span>
              </div>
            </div>
          </div>

          <div className=" md:col-span-7  rounded-lg shadow-md ">
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
