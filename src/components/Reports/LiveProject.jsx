import React from "react";
import { electric, project1, digital, mitroband } from "../../assets/image";

const LiveProject = () => {

  const liveProject = [
    {
      image: electric,
      src:""  ,
      title: "Electric Vehicle ",
    },
    {
      image: mitroband ,
      src:""  ,
      title: "Mitro Bands",
    },
    {
      image: digital ,
      src:""  ,
      title: "Elegant Innovations",
    },
  ]
  return (
    <>
    <div className=" mx-0 py-4 bg-gray-700 pb-20">
      <h2 className="text-3xl text-white font-bold mb-6 ml-6 pt-6 text-center">
        Live Projects
      </h2>
      {/* <p className="text-md text-white mb-6 px-40 text-center">
        Our live projects
          </p> */}
      {/* <div className="flex flex-wrap  ml-10">
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
      </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5 m-5 lg:grid-cols-3  gap-6 bg-gray-700 ">
     {liveProject.map((item) => (
       <div key={item.id} className="p-2 bg-white rounded-lg shadow-md hover:shadow-2xl transition duration-300 transform hover:scale-105">
        
         <img
           src={item.image}
           alt={item.title}
           className="object-contain rounded-md mb-2 "
         />
        
         <h3 className="text-lg font-medium text-center">{item.title}</h3>
       </div>
       
     ))}
   </div>

    </div>
   
    </>
  );
};

export default LiveProject;
