import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const ServiceComponent = ({ title, description }) => (
  <div className="w-full md:w-1/2 lg:w-1/2 px-4 mb-8 lg:h-60">
    <div data-aos="fade-right" className="bg-gray-100 mx-4 p-4 lg:h-56 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105 hover:bg-gray-200">
      <h3 className="text-xl font-bold mb-4 text-gray-700">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

export default ServiceComponent;
