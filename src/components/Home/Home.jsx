import React from "react";
import { Link } from "react-router-dom";
import { asset1, asset2, asset3, event1, home, home1, } from "../../assets/image";
import "../../App.css";
import About from "../About/About";
import Services from "../Services/Services";
import Vision from "../About/Vision";
import LiveProject from "../Reports/LiveProject";
import EventItem from "../gallery/EventItem";


export default function Home() {
 
  
  return (
    <div className="">
      <div className= {`bg-[url('../src/assets/image/home.jpg')] bg-cover`}>
      <div className="relative h-[600px]  ">
      
        <div className="absolute inset-0 flex items-center justify-center">
          <div data-aos="zoom-in"  data-aos-delay="200"  
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center"
    data-aos-duration="1000"
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
            <button title="view" className="bg-gray-200 text-black py-2 px-4 rounded-md transition duration-300 hover:bg-orange-700 hover:text-white">
              View All
            </button>
            </Link>
          </div>
        </div>
         <EventItem />
      </div>
      {/* programs */}

      <div id="live_project">
        <LiveProject />
      </div>

    
    </div>
  );
}
