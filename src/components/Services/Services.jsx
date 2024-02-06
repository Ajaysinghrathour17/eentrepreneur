// App.js

import React from 'react';
import ServiceComponent from './ServiceComponent';

const Services = () => {
  const services = [
    {
      title: 'Business Ideation & Conceptualization',
      description:
        "Embark on your entrepreneurial journey with Elegant Entrepreneur's Business Ideation and Conceptualization service. Led by our visionary founder, Sumit Kataria, we offer innovative and meticulously crafted business ideas tailored to your unique vision. Whether you're a seasoned entrepreneur or just starting, our expert team provides guidance to kickstart your business venture on the path to success."
    },
    {
      title: 'Comprehensive Project Reports',
      description:
        "Dive into the intricate world of business with our Comprehensive Project Reports service. Elegant Entrepreneur serves as your go-to resource for turning business dreams into actionable plans. Our reports offer in-depth analysis, market insights, and strategic recommendations, providing a solid foundation for decision-making and securing the support you need to bring your vision to life."
    },
    
    {
      title: 'Entrepreneurship Program',
      description:
        "The Entrepreneurship  Program at Elegant Entrepreneur symbolizes our commitment to your long-term success. This program goes beyond traditional business services, offering a holistic approach to entrepreneurship. Join a community dedicated to continuous learning, networking, and support, fostering an environment where innovation and growth go hand in hand."
    },
    {
      title: 'Skill Development Workshops',
      description:
        "Elevate your entrepreneurial journey with Elegant Entrepreneur's Skill Development Workshops. Designed to empower individuals and groups, our workshops cover a spectrum of essential skills, from leadership and communication to strategic planning. Gain the knowledge and expertise needed to navigate the dynamic landscape of business and enhance your capabilities as a successful entrepreneur."
    }
  ];

  return (
    <div className=" mx-0 py-4 bg-gray-700">
      <h2 className="text-3xl text-white font-bold mb-6 ml-6 pt-6 text-center">Our Services</h2>
      
      <div className="flex flex-wrap  ">
        {services.map((service, index) => (
          <ServiceComponent key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
