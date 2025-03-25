
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between pl-4 gap-[300px]">
      <div className="flex space-x-6">
        <button className="text-green-600 border-b-2 border-green-600 font-medium">
          All Plants
        </button>
        <button className="text-gray-700 hover:text-black font-medium">
          New Arrivals
        </button>
        <button className="text-gray-700 hover:text-black font-medium">
          Sale
        </button>
      </div>

      <div className="flex justify-end items-center space-x-2">
        <span className="text-gray-700 font-medium flex justify-end">Sort by:</span>
        <select className="border rounded-[10px] px-2 py-1 text-gray-700 focus:outline-none">
          <option>Default Sorting</option>
          <option>The Cheapest</option>
          <option>Most Expensive</option>
        </select>
      </div>
    </div>
  );
};

export default Navbar;
