import React from "react";
import { project1 } from "../../assets/image";

const LiveProject = () => {
  return (
    <div className=" mx-0 py-4 bg-gray-700 pb-20">
      <h2 className="text-3xl text-white font-bold mb-6 ml-6 pt-6 text-center">
        Live Projects
      </h2>
      {/* <p className="text-md text-white mb-6 px-40 text-center">
        Our live projects
          </p> */}
      <div className="flex flex-wrap  ml-10">
        <div>
        <a href="https://www.instagram.com/p/CwU4JbetQN9/">
          <div>
            <p className="text-white font-semibold text-2xl text-center mb-4">Electric Vehicle </p>
          </div>
          <video className="w-96" controls>
            <source src={project1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </a>
        </div>
      </div>
    </div>
  );
};

export default LiveProject;
