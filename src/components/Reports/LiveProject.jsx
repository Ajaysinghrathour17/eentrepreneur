import React from "react";
import { electric, project1, digital, mitroband } from "../../assets/image";
import { Link } from "react-router-dom";

const LiveProject = () => {

  const liveProject = [
    {
      id:1,
      image: electric,
      src:"/projects/electric-vehicle"  ,
      title: "Electric Vehicle ",
    },
    {
      id:2,

      image: mitroband ,
      src:"/projects/mitro-bands"  ,
      title: "Mitro Bands",
    },
    {
      id:3,

      image: digital ,
      src:"/projects/elegant-innovations"  ,
      title: "Elegant Innovations",
    },
  ]
  return (
    <>
    <div className=" mx-0 py-4 bg-gray-700 pb-20">
      <h2 className="text-3xl text-white font-bold mb-6 ml-6 pt-6 text-center">
        Live Projects
      </h2>
     
        <div className="grid grid-cols-1 md:grid-cols-2 mt-5 m-5 lg:grid-cols-3  gap-6 bg-gray-700 ">
     {liveProject.map((item) => (
       <Link to={item.src} key={item.id}>
       <div  className="p-2 bg-white rounded-lg shadow-md hover:shadow-2xl transition duration-300 transform hover:scale-105">
        
        <img
          src={item.image}
          alt={item.title}
          className="object-contain rounded-md mb-2 "
        />
       
        <h3 className="text-lg font-medium text-center">{item.title}</h3>
      </div>
       </Link>
       
     ))}
   </div>

    </div>
   
    </>
  );
};

export default LiveProject;
