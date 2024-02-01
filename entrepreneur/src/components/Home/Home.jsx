import React from "react";
import { Link } from "react-router-dom";
import { asset1, asset2, asset3 } from "../../assets/image";
import Photo from "../gallery/Photo";
import "../../App.css";

export default function Home() {
  const galleryItems = [
    {
      id: 1,
      image: "https://www.katariaweb.in/assets/img/4.jpeg",
      title: "Investor Awareness Program",
    },
    {
      id: 2,
      image: "https://www.katariaweb.in/assets/img/4.jpeg",
      title: "Program 2",
    },
    // Add more items as needed
  ];
  return (
    <div className="">
      <div className="hero sm:h-96">
        <img src={asset2} alt="image" className="main_img" height={"100vh"} />
        <h3 className="">It always seems imposible untill it's done</h3>
      </div>

      {/* programs */}
      <div className="programs my-12">
        <div className="head flex justify-between px-4">
          <div className=" text-3xl font-bold border-b-4 hover:border-b-orange-600 hover:delay-100	">Our Programmes</div>
          <div className="text-center mt-4">
            <button className="bg-gray-200 text-black py-2 px-4 rounded-md transition duration-300 hover:bg-orange-700 hover:text-white">
              View All
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-5 md:m-5 lg:grid-cols-2 gap-4">
          {galleryItems.map((item) => (
            <div key={item.id} className="p-4 bg-white rounded-md shadow-md">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-72	 object-cover rounded-md mb-2"
              />
              <h3 className="text-lg font-medium">{item.title}</h3> 
              {/* Add additional information or actions as needed */}
            </div>
          ))}
        </div>
      </div>

      {/* programs */}

      <div className="gallery  w-full">
        <div className="head_text">
          <h3 className="text-center text-4xl font-bold">Photo Gallery</h3>
        </div>

        <div className="gallery_photo flex items-center justify-center ">
          <img src={asset1} alt="" />
          <img src={asset2} alt="" />
          <img src={asset1} alt="" />
          <img src={asset2} alt="" />
        </div>
      </div>
    </div>
  );
}
