import React from 'react';
import 'animate.css'; // Import animate.css for animations

const Vision = () => {
  return (
    <div className="bg-gray-700 h-auto w-full py-6 pb-10 ">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-20 px-5 text-center mt-10">
        <div data-aos="fade-right" 
       className="bg-white p-8 mb-4 rounded-lg shadow-lg animate__animated animate__fadeIn ">
          <h2 className="text-4xl font-bold text-gray-800 mb-4"> Vision</h2>
          <p className=" text-gray-700 leading-loose lg:text-xl font-thin">
          At Elegant Entrepreneur, we envision a global landscape where entrepreneurship is a catalyst for positive change. Our vision is to be a leading force in shaping a world where individuals and groups, armed with the right skills and visionary ideas, confidently embark on the journey of building successful and impactful businesses. We strive to redefine the entrepreneurial experience, fostering a community that thrives on innovation, collaboration, and sustainable growth. Elegant Entrepreneur aspires to be the driving force behind a new era of empowered and successful entrepreneurs.</p>
        </div>
        <div data-aos="fade-left" className="bg-white p-8 rounded-lg shadow-lg animate__animated animate__fadeIn ">
          <h2 className="text-4xl font-bold text-gray-800 mb-4"> Mission</h2>
          <p className=" text-gray-700 leading-loose lg:text-xl font-thin ">
          Our mission at Elegant Entrepreneur is to provide unparalleled support and resources for aspiring individuals and groups venturing into the realm of entrepreneurship. We are dedicated to offering innovative solutions, whether through comprehensive project reports or inspiring business ideas, tailored to the unique needs of our users. Beyond that, we are committed to nurturing skill development through targeted programs, equipping our community with the tools and knowledge essential for success. Elegant Entrepreneur is more than a platform; it is a movement that propels the evolution of entrepreneurship by guiding, inspiring, and empowering individuals to realize their full potential in the world of business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Vision;
