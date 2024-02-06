import React from 'react';
import 'animate.css'; // Import animate.css for animations

const Vision = () => {
  return (
    <div className="bg-gradient-to-b from-gray-200 to-gray-400 py-2 h-auto w-full  ">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 text-center mt-10">
        <div className="bg-white p-8 rounded-lg shadow-lg animate__animated animate__fadeIn ">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Vision</h2>
          <p className=" text-gray-700 leading-loose">
            At Elegant Entrepreneur, our vision is to be the catalyst for a global revolution in entrepreneurship. We envision a world where every individual, armed with the right skills and innovative ideas, can confidently embark on the journey of building their own successful business. Through relentless dedication to excellence and a commitment to fostering creativity, we aspire to redefine the landscape of entrepreneurship, empowering dreamers to become thriving business owners.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className=" text-gray-700 leading-loose">
            Our mission at Elegant Entrepreneur is to provide unparalleled support and resources for aspiring entrepreneurs. We strive to cultivate a community where ideas flourish and skills are honed. By offering comprehensive business solutions, skill development programs, and a nurturing environment, we aim to inspire, guide, and propel individuals towards sustainable and impactful business ventures. Elegant Entrepreneur is not just a platform; it's a movement that propels the evolution of entrepreneurship.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
