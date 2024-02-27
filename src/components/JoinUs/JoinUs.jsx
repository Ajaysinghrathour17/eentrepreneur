import React from "react";
import Accordion from "./Accordian";
import WhyJoinUs from "./Accordian";

const JoinUs = () => {
  return (
    <>
      <div className="bg-gray-700  ">
        <h2 className=" py-8 text-white  text-3xl font-sans text-center  ">
          Join Us
        </h2>
      </div>
     
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <p className="text-lg mb-8 text-center">
            Join Elegant Entrepreneur to gain access to valuable knowledge and
            guidance for starting a startup.
          </p>
         <a href="https://docs.google.com/forms/d/e/1FAIpQLSeAZ5VE6tWQFfS-b-1pWTKU6mfEqdoFumIyJ4P4I6aZMO4vAA/viewform" target="_blank">
         <div className=" md:flex md:justify-center">
            <div className="  pb-6 md:px-6">
              <button className="w-full bg-gray-800 text-white px-6 py-3 rounded-md shadow-md hover:bg-gray-700 transition-colors duration-300">
                Join as Entrepreneurs
              </button>
            </div>
            <div>
              <button className=" w-full bg-gray-800 text-white px-6 py-3 rounded-md shadow-md hover:bg-gray-700 transition-colors duration-300">
                Join as College/School Groups
              </button>
            </div>
          </div>
         </a>
        </div>
      </div>
      <div>
      <div>
        <WhyJoinUs  />
     </div>
     <div className="flex justify-center  pb-6 md:px-6">
              <button className="w-32 bg-gray-800 text-white px-4 py-2 rounded-[20px] shadow-md hover:bg-gray-700 transition-colors duration-300 text-xl font-semibold">
               <a href="https://docs.google.com/forms/d/e/1FAIpQLSeAZ5VE6tWQFfS-b-1pWTKU6mfEqdoFumIyJ4P4I6aZMO4vAA/viewform"> Join </a>
              </button>
            </div>
      </div>
    </>
  );
};

export default JoinUs;
