import React from 'react';

const ElectricVehicle = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Electric Vehicle Converter Startup</h2>
      <div className="bg-gray-100 rounded-lg p-4">
        <img src="electric_vehicle.jpg" alt="Electric Vehicle Converter Startup" className="w-full h-auto rounded-lg mb-4" />
        <p className="text-gray-700 mb-4">We at Electric Vehicle Converter Startup are passionate about transforming traditional vehicles into eco-friendly marvels. With our cutting-edge technology and expertise, we convert gas-guzzling vehicles into efficient electric machines. Our mission is to contribute to a cleaner environment and promote sustainable transportation solutions for the future.</p>
        
        <h3 className="text-xl font-bold mb-2">Our Services:</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>Custom electric vehicle conversion</li>
          <li>Battery upgrade and maintenance</li>
          <li>Consultation on electric vehicle technology</li>
          <li>And more...</li>
        </ul>
        
        <h3 className="text-xl font-bold mb-2">Why Choose Us?</h3>
        <p className="text-gray-700 mb-4">With years of experience in the industry and a team of dedicated professionals, we ensure top-quality service and satisfaction for our clients. We prioritize innovation, sustainability, and customer-centric solutions in everything we do.</p>
        
        <a href="/" className="text-blue-500 hover:underline">Back to Home</a>
      </div>
    </div>
  );
};

export default ElectricVehicle;
