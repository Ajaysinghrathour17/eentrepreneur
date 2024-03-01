import React from 'react';
import { digital, digitalin } from '../../assets/image';

const ElegantInnovations = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Elegant Innovation</h2>
      <div className="bg-gray-100 rounded-lg p-4 ">
        <div>     
             <img src={digital} alt="Elegant Innovation" className="w-[400] h-96 rounded-lg mb-4" />
             {/* <img src={digitalin} alt="Elegant Innovation" className="w-[400] h-96 rounded-lg mb-4" /> */}

       </div>
      <div>
      <p className="text-gray-700 mb-4">Elegant Innovation is your one-stop destination for all things digital. We specialize in providing comprehensive digital solutions to help businesses thrive in the digital landscape. From digital marketing strategies to web/app development and UI/UX design, we offer a wide range of services tailored to meet your specific needs.</p>
        
        <h3 className="text-xl font-bold mb-2">Our Services:</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>Digital marketing strategies and campaigns</li>
          <li>Search engine optimization (SEO)</li>
          <li>Web development and design</li>
          <li>Mobile app development</li>
          <li>UI/UX design</li>
          <li>Graphics design</li>
          <li>And more...</li>
        </ul>
        
        <h3 className="text-xl font-bold mb-2">Why Choose Us?</h3>
        <p className="text-gray-700 mb-4">At Elegant Innovation, we are committed to delivering results-driven digital solutions that help our clients achieve their business goals. Our team of experts combines creativity, innovation, and technical expertise to deliver high-quality solutions that stand out in the digital landscape. Partner with us and experience the difference that Elegant Innovation can make for your business.</p>
        
      </div>
        <a href="/" className="text-blue-500 hover:underline">Back to Home</a>
      </div>
    </div>
  );
};

export default ElegantInnovations;
