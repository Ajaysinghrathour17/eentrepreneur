import React from "react";
import {FaInstagram, FaYoutube, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SocialIcons = () => {
  return (
    <div className="bg-white rounded-md px-4 py-1">
       <div className="flex space-x-4  ">
      {/* Facebook */}
      <a
        href="https://www.facebook.com/elegantenterpreneur"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook className="text-gray-600 hover:text-blue-800 w-6 h-6" />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/elegant-entrepreneurs-7799a92b1/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="text-gray-600 hover:text-blue-700 w-6 h-6" />
      </a>
      {/* YouTube */}
      <a
        href="https://www.youtube.com/@ElegantEntrepreneur/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube className="text-gray-600 hover:text-red-800 w-6 h-6" />
      </a>
      {/* Instagram */}
      <a
        href="https://www.instagram.com/_elegant_entrepreneur_/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="text-gray-600 hover:text-pink-700 w-6 h-6 " />
      </a>

      {/* Twitter */}
      <a href="#"  rel="noopener noreferrer">
        <FaXTwitter className="text-gray-600 hover:text-blue-600 w-6 h-6" />
      </a>
    </div>
    </div>
  );
};

export default SocialIcons;
