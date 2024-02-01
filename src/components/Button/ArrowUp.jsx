import React from "react";
import { FaArrowUp } from "react-icons/fa"; // Import the above arrow icon

const ArrowUp = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="container mx-auto max-h-screen overflow-hidden relative">
      <button
        className="fixed bottom-8 right-8 bg-black text-white py-2 px-4 rounded-full hover:bg-gray-300 transition duration-300 flex items-center z-10"
        onClick={scrollToTop}
      >
        <FaArrowUp className="" />
      </button>
    </div>
  );
};

export default ArrowUp;
