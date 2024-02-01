import React from 'react'
import { home1, logo } from '../../assets/image';
import { Link } from 'react-router-dom';

export default function About() {
  return (
      <div className="py-16 pl-10  bg-white">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-2 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:w-5/12 lg:w-2/5">
                      <img
                          src={home1}
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                    <div className="about_head lg:mt-[-100px] ">
                        
                    </div>
                      <h2 className="text-2xl text-gray-900  md:text-4xl  font-mono">
                      Elegant Entrepreneurs
                      </h2>
                      <p className="mt-6 text-gray-600 font ">
                      Welcome to Elegant Entrepreneurs, where the seeds of your
                  business dreams find fertile ground to flourish. Founded by
                  Sumit Kataria, the visionary leader behind Kataria Group,
                  Elegant Entrepreneur is a platform dedicated to empowering
                  individuals and groups on their entrepreneurial journey. At
                  the heart of our mission is the commitment to provide
                  comprehensive solutions for aspiring business owners, offering
                  not just the inspiration, but the practical tools needed to
                  turn ideas into successful ventures.
                      </p>
                      <p className="mt-4 text-gray-600">
                           With a focus on skill development and fostering
                  entrepreneurship evolution, Elegant Entrepreneur stands as a
                  beacon for those seeking to navigate the dynamic landscape of
                  business ownership. Our dedicated team goes beyond the
                  conventional by providing meticulously crafted project reports
                  and innovative business ideas. We understand that the journey
                  of starting a business can be daunting, and that's precisely
                  why Elegant Entrepreneur exists – to guide, support, and
                  propel you towards entrepreneurial success. Join us as we
                  redefine the entrepreneurial experience, one elegant idea at a
                  time.
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