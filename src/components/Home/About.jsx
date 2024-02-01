import React from "react";
import { logo } from "../../assets/image";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="h-screen border-4">
        <div className=" h-20 mt-10 ">
          <strong className=" font-bold text-2xxl ">
            <h1>About us</h1>
          </strong>
          <div>
            <h2 className=" font-bold text-4xl text-gray-700 ">
              Elegant Entrepreneurs
            </h2>
            <div className="about_detail flex">
              <div className="max-w-[50%] ">
                <p>
                  
                  <br />
                 
                </p>
                <div className=" mt-4">
                  <Link to ="about">
                    <button className="bg-black text-white py-2 px-4 rounded-[30px] transition duration-300 hover:bg-orange-500 hover:text-gray-700">
                    Read more
                  </button>
                  </Link>
                </div>
              </div>
              <div>
                <img src={logo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
