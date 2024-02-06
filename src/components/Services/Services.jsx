// App.js

import React from 'react';
import ServiceComponent from './ServiceComponent';

const Services = () => {
  const services = [
    {
      title: 'Business Ideation & Conceptualization',
      description:
        "At Elegant Entrepreneur, we kickstart your entrepreneurial journey with our Business Ideation and Conceptualization service. Led by Sumit Kataria, founder of Kataria Group, our team provides innovative and carefully crafted business ideas tailored to your vision."
    },
    {
      title: 'Comprehensive Project Reports',
      description:
        "Our Comprehensive Project Reports service sets us apart as a go-to resource for those serious about turning their business dreams into reality. Backed by the expertise of Elegant Entrepreneur, we deliver detailed and insightful project reports that serve as roadmaps for your business endeavors.."
    },
    {
      title: 'Skill Development Workshops',
      description:
        "levate your entrepreneurial journey with our Skill Development Workshops at Elegant Entrepreneur. We believe that acquiring the right skills is paramount for business success. Our workshops, curated by industry experts, cover a spectrum of essential skills, from effective communication to strategic decision-making."
    },
    {
      title: 'Entrepreneurship Evolution Program',
      description:
        "The Evolution Program at Elegant Entrepreneur signifies our commitment to your long-term success. Our vision, rooted in the belief that entrepreneurship is an evolving process, is embodied in this program. Through mentorship, ongoing support, and access to exclusive resources, we ensure that your entrepreneurial journey is not just a one-time venture but a continuous evolution towards greater heights of success."
    },
  ];

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-bold mb-6 ml-6 text-gray-800  underline">Our Services</h2>

      <div className="flex flex-wrap mx-4 ">
        {services.map((service, index) => (
          <ServiceComponent key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
