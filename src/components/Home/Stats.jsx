// components/StatCard.jsx
import React from 'react';
import CountUp from 'react-countup';

const Stats = ({ label, end, suffix = '', duration = 28 }) => {
  return (
    <div className="bg-themeClr2 text-themeClr rounded-xl shadow-md p-6 w-full sm:w-100% text-center">
      <h2 className="text-4xl font-bold">
        <CountUp end={end} duration={duration} suffix={suffix} />
      </h2>
      <p className="mt-2 text-sm font-medium text-white">{label}</p>
    </div>
  );
};

export default Stats;
