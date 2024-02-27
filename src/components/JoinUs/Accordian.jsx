// Accordion.js

import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 px-6 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 transition-transform transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
          />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 py-4 text-[18px] text-gray-600">{content}</div>
      )}
    </div>
  );
};


const WhyJoinUs = () => {
    const topics = [
      {
        title: 'Expert Guidance',
        content: 'Gain access to expert guidance and advice from industry professionals and successful entrepreneurs. Our team is dedicated to providing you with the knowledge and resources you need to succeed.',
      },
      {
        title: 'Networking Opportunities',
        content: 'Connect with like-minded individuals and expand your network. Join our community of entrepreneurs, investors, and mentors to collaborate and grow together.',
      },
      {
        title: 'Skill Development',
        content: 'Enhance your entrepreneurial skills through workshops, training programs, and educational resources. We provide you with the tools and knowledge to thrive in the competitive business world.',
      },
      {
        title: 'Access to Resources',
        content: 'Access a wealth of resources, including project reports, business ideas, and market insights. Our goal is to equip you with everything you need to start and grow your business.',
      },
      {
        title: 'Supportive Community',
        content: 'Join a supportive community that encourages innovation, creativity, and collaboration. At Elegant Entrepreneur, you\'ll find the support and encouragement you need to pursue your entrepreneurial dreams.',
      },
    ];
  
    return (
      <div className="  px-20 py-10">
        <h2 className='text-center font-bold text-2xl pb-2'>Why join us?</h2>
        <div className="">
          {topics.map((topic, index) => (
            <Accordion key={index} title={topic.title} content={topic.content} />
          ))}
        </div>
      </div>
    );
  };

  export default WhyJoinUs;