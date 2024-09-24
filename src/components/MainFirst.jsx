import React from 'react';
import { FaCheck, FaPlay } from 'react-icons/fa';
import shoping from '../assets/shoping.mp4';

const MainFirst = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between mt-10 p-6 lg:p-14 bg-white">
      {/* Left content section */}
      <div className="flex flex-col items-start justify-center m-4 lg:m-10 p-4 w-full lg:w-1/2">
        <h1 className="font-bold text-3xl lg:text-4xl text-slate-900 mb-6 leading-tight">
          Create and Sell Custom Products
        </h1>
        <ul className="space-y-3 mb-5">
          <li className="flex items-center text-sm text-gray-800">
            <FaCheck className="text-green-500 mr-2" />
            100% Free to use
          </li>
          <li className="flex items-center text-sm text-gray-800">
            <FaCheck className="text-green-500 mr-2" />
            900+ High-Quality Products
          </li>
          <li className="flex items-center text-sm text-gray-800">
            <FaCheck className="text-green-500 mr-2" />
            Largest global print network
          </li>
        </ul>
        <div className="flex space-x-4 mt-4">
          <button className="bg-green-500 text-white py-2 px-4 rounded-md shadow hover:bg-green-600 transition duration-300 text-sm">
            Start for Free
          </button>
          <button className="bg-white text-gray-700 border border-gray-300 py-2 px-4 font-medium rounded-md shadow flex items-center hover:text-green-500 hover:bg-gray-100 transition duration-300 text-sm">
            <FaPlay className="mr-2" />
            How it Works?
          </button>
        </div>
        <p className="text-green-500 text-sm font-sans mt-4">
          Trusted by sellers around the world
        </p>
      </div>

      {/* Right content section with the video */}
      <div className="mt-10 lg:mt-0 lg:ml-10 flex justify-center items-center w-full lg:w-1/2 relative overflow-hidden rounded-lg">
  <video
    src={shoping}
    autoPlay
    loop
    muted
    className="w-[110%] h-[160%] object-cover border-none outline-none bg-white" 
    alt="Shopping animation"
  />
</div>



    </div>
  );
};

export default MainFirst;
