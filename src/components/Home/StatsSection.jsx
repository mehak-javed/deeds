import React from 'react';
import Stats from './Stats';

const StatsSection = () => {
  return (
    <div className=" py-10 px-4">
        
      <div className="px-6 lg:px-8">
        <div className="w-full h-full items-center">
          <div className="lg:flex md:flex grid grid-cols-1 md:gap-8  lg:gap-8 gap-4 py-5 md:py-8 lg:py-8 justify-center">
            <Stats label="Visas Processed" end={50} suffix="K+" />
            <Stats label="Years Experience" end={10} suffix="+" />
            <Stats label="Sucess Rate" end={98} suffix="%" />
            <Stats label="Countries Represented" end={10} suffix="+" />

          </div>
        </div>

       
       
       
      </div>
    </div>
  );
};

export default StatsSection;