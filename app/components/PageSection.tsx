import React from "react";
import Navbar from "./Navbar"; // Adjust the path based on your project structure

const PageSection = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900">
      <Navbar />
      <div className="w-full sm:w-10/12 md:w-10/12 lg:w-11/12 xl:w-11/12 mx-auto my-4 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        {children}
      </div>
    </div>
  );
};

export default PageSection;
