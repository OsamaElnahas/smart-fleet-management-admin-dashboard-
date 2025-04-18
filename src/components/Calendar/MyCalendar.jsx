import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; 
import styles from "./MyCalendar.module.css"; // Import your CSS module

const MyCalendar = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar bg-black  rounded-lg shadow-md text-white w-[100%] p-6">
      <h2 className="text-lg font-semibold mb-4 text-white w-[100%]">Calendar</h2>
      <Calendar 
           onChange={setDate} 
           value={date} 
           className={`mycalendar  ${styles.calendar}`} // Apply the CSS module class
/>
      <p className="mt-4">Selected date: {date.toDateString()}</p>
    </div>
  );
};

export default MyCalendar;
