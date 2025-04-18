import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const data = [
  { day: '17 Sun', thisWeek: 230000, lastWeek: 180000 },
  { day: '18 Mon', thisWeek: 120000, lastWeek: 140000 },
  { day: '19 Tue', thisWeek: 80000, lastWeek: 130000 },
  { day: '20 Wed', thisWeek: 160000, lastWeek: 150000 },
  { day: '21 Thu', thisWeek: 150000, lastWeek: 120000 },
  { day: '22 Fri', thisWeek: 200000, lastWeek: 90000 },
  { day: '23 Sat', thisWeek: 140000, lastWeek: 110000 },
];

const StatisticsChart = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Statistics</h2>
      <p className="text-sm text-gray-500 mb-4">Weekly Comparison</p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis tickFormatter={(value) => `$${(value / 1000).toLocaleString()}k`} />
          <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
          <Legend />
          <Bar dataKey="thisWeek" fill="#111111" name="This week" />
          <Bar dataKey="lastWeek" fill="#e0e0e0" name="Last week" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StatisticsChart;
