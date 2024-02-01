// ServiceComponent.js

import React from 'react';

const ServiceComponent = ({ title, description }) => (
  <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105">
      <h3 className="text-2xl font-bold mb-4 text-purple-600">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  </div>
);

export default ServiceComponent;
