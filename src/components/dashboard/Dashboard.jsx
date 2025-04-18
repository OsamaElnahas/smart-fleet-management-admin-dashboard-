import React from 'react';
import MyCalendar from '../Calendar/MyCalendar';
import StatisticsChart from '../Statistcs/Statistcs';
// import DateTimePicker from '../Calendar/Calendar';
// import Calendar from '../Calendar/Calendar.jsx';
// import MyCalendar from '..';

const Dashboard = () => {
  return (
    <>
      <div className="title text-[1.8rem] font-bold mb-10 text-gray-800">Dashboard</div>

      <div className="dashboard grid gap-6">
        <div className="grid  md:grid-cols-12 gap-6">
          <div className="cards md:col-span-5 flex flex-col gap-4">
            <div className="card h-32 text-white px-6 py-8 rounded-lg shadow-md bg-gray-500
               ">Card 2</div>
 <div className="card h-32 text-white px-6 py-8 rounded-lg shadow-md bg-zinc-800">Card 1</div>
            <div className="card h-32 text-white px-6 py-8 rounded-lg shadow-md bg-[#2f2675]">Card 3</div>
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
