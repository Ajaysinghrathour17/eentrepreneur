import React from "react";
import Videos from "./Videos";
import EventItem from "./EventItem";

const Event = () => {
  return (
    <div>
      <div className="bg-gray-700  ">
        <h2 className=" py-10 text-white   duration-200 text-3xl font-sans text-center  ">
          Events
        </h2>
      </div>
      <div>
        <div>
          <EventItem />
        </div>
        <Videos />
      </div>
    </div>
  );
};

export default Event;
