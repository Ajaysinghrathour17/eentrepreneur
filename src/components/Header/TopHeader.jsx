import React from "react";
import { IoMdMailUnread, IoMdCall } from "react-icons/io";
import SocialIcons from "../Button/SocialIcons";

const TopHeader = () => {
  return (
    <div className="mb-1 ">
      <div className="pt-2 bg-gray-700 lg:h-12 flex justify-between px-5">
         <div className="md:flex">
         <div className="ml-3 text-white flex">
          <div className="mt-1 pr-2">
            <IoMdMailUnread />{" "}
          </div>
          <span className="">support@eentrepreneur.in</span>
        </div>
        {/* number */}
        <div className="flex  text-white">
        <div className="mt-1 pl-4">
          <IoMdCall />
        </div>
        <span className=" text-white"> +91 2269622640</span>
      </div>
         </div>

       <div className=" ">
        <SocialIcons />
       </div>
      </div>

      
    </div>
  );
};

export default TopHeader;
