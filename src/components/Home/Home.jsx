import React from "react";
import { Link } from "react-router-dom";
import { asset1, asset2, asset3, home, home1 } from "../../assets/image";
import "../../App.css";
import About from "../About/About";
import Services from "../Services/Services";
import Vision from "../About/Vision";


export default function Home() {
  const galleryItems = [
    {
      id: 1,
      image: "https://scontent.fdel5-1.fna.fbcdn.net/v/t39.30808-6/352727647_117330641383039_2454725517890607298_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=3635dc&_nc_ohc=fP52tVWyGZMAX-AflR2&_nc_ht=scontent.fdel5-1.fna&oh=00_AfBXEzp4qqYQI-nn-L93TCqLEhoSPYGga_Vnf9mvHb4Tjw&oe=65C31F04",
      title: "Food Competition",
    },
    // {
    //   id: 2,
    //   image: "https://www.facebook.com/reel/379386294517949",
    //   title: "Social Work" }
    // Add more items as needed
  ];
  return (
    <div className="">
      <div className=" bg-[heropage] bg-cover">
      <div className="relative h-[600px]  ">
      
        <div className="absolute inset-0 flex items-center justify-center">
          <div data-aos="zoom-in"  data-aos-delay="50"
    data-aos-duration="500"
    data-aos-easing="ease-in-out" className="bg-gray-800 bg-opacity-50  text-white p-8 rounded-[20px] max-w-3xl mx-auto text-center">
            <h3 className="italic font-bold text-3xl lg:text-4xl xl:text-5xl mb-6 uppercase">
              "It always seems impossible until it's done"
            </h3>
            <p className="text-lg mb-8">
              Explore and discover the endless possibilities.
            </p>
            {/* <button className="bg-white text-black py-2 px-4 rounded-full hover:bg-gray-300 transition duration-300">
              Get Started
            </button> */}
          </div>
        </div>
        
      </div>
    </div>
    {/* vision and vission */}
      {/* <section className="mt-10">
      <Vision />
      </section> */}
      {/* services */}
      <section>
        <Services />
      </section>

      {/* About us section - home page */}

      <secction className="about_section h-screen md:mt-[-100px]  ">
        <h2 className="text-3xl font-bold mb-6 ml-8 text-gray-800 text-center mt-5">About us</h2>

        <About data-aos="fade-up"
      data-aos-duration="3000" className="" />
        <div className='mt-4'><Vision /></div>

      </secction>

       {/* About us section - home page */}
 

      {/* programs */}
      <div className="programs my-12">
        <div className="head flex justify-between px-4">
          <div className=" text-3xl font-bold ml-6 border-b-4 hover:border-b-orange-600 hover:delay-100	">
            Events
          </div>
          <div className="text-center mt-4">
            <Link to="/events" >
            <button className="bg-gray-200 text-black py-2 px-4 rounded-md transition duration-300 hover:bg-orange-700 hover:text-white">
              View All
            </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-5 md:m-5 lg:grid-cols-3  gap-4">
          {galleryItems.map((item) => (
            <div key={item.id} className="p-2 bg-white rounded-md shadow-md">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-86	 object-cover rounded-md mb-2 hover:shadow-2xl transition duration-300 transform hover:scale-105"
              />
              <h3 className="text-lg font-medium text-center">{item.title}</h3>
              {/* Add additional information or actions as needed */}
            </div>
          ))}
        </div>
      </div>

      {/* programs */}

    
    </div>
  );
}
