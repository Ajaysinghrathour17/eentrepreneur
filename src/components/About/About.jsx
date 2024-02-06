import React from 'react'
import { home1, logo } from '../../assets/image';
import { Link } from 'react-router-dom';
import Vision from './Vision';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init();
export default function About() {
  return (
      <div className=" md:py-2 pl-10  bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div data-aos="fade-up-right" className=" space-y-2 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div  className=" md:w-6/12 ">
                      <img
                          src={home1}
                          alt="image"
                          className='h-[550px] w-[500px] '
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                   
                      <h2 className="text-2xl text-gray-900  md:text-4xl  font-mono lg:mt-20">
                      Elegant Entrepreneurs
                      </h2>
                      <p className="mt-8 text-gray-600  ">
                      Welcome to Elegant Entrepreneur, where the journey of turning entrepreneurial dreams into reality begins. Founded by Sumit Kataria, a visionary entrepreneur himself, Elegant Entrepreneur is more than just a platform; it's a dynamic space crafted to empower individuals and groups on their path to business success. Whether you're a budding entrepreneur or a seasoned professional seeking innovative solutions, we offer comprehensive services to guide you through the intricate process of starting a business.
                      </p>
                      <p className="mt-4 text-gray-600">
                      At Elegant Entrepreneur, our mission is rooted in the belief that entrepreneurship is a powerful force for positive change. Sumit Kataria envisioned this platform to not only provide crucial project guidance and business ideas but also to foster skill development through tailored programs. We understand the unique challenges individuals and groups face when venturing into the business world, and our commitment is to be your dedicated partner on this transformative journey. Join us at Elegant Entrepreneur, where innovation meets guidance, and dreams take flight.
                      </p>
                      <div className=" mt-4">
                    <Link to="about">
                    <button className="bg-black text-white py-2 px-4 rounded-[30px] transition duration-300 hover:bg-orange-500 hover:text-gray-700">
                      Read more
                    </button>
                     </Link>
                     </div>
                     
                  </div>
                  
              </div>
          </div>
      </div>
  );
}