import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          {/* <a href="https://flowbite.com/" className="hover:underline"> */}
          KprApps
          {/* </a> */}
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Home Guide
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Activities and Dining
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Our Visitors
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Booking
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
