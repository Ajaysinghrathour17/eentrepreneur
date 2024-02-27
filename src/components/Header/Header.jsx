import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { logo } from "../../assets/image";
import ArrowUp from "../Button/ArrowUp";
import SocialIcons from "../Button/SocialIcons";
import TopHeader from "./TopHeader";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
     <TopHeader />
    <header className=" w-full bg-gray-100 pb-1">
      
      <nav className="sm:px-4 lg:px-4 ">
        <div className="flex flex-wrap md:flex-nowrap lg:justify-end items-center">
          <div className="w-full flex justify-between">
            <div>
              <Link to="/" className="flex items-center">
                <img src={logo} className="ml-10 h-20 w-18" alt="Logo" />
              </Link>
            </div>

            {/* Menu icon for mobile */}
            <div className="pt-3 px-5">
              <div className="md:hidden  cursor-pointer" onClick={toggleMenu}>
                {isMenuOpen ? (
                  // Cross icon when menu is open
                  <svg
                    className="w-6 h-6 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                ) : (
                  // Hamburger icon when menu is closed
                  <svg
                    className="w-6 h-8 mr-4 text-2xl text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                )}
              </div>
            </div>
          </div>
          {/* social icons */}
          {/* <div className='hidden md:block sm:pr-10 text-2xl mt-4 '>
            < SocialIcons /> 
          </div> */}

          {/* Navigation links for desktop */}
          
          <div 
            className={`${
              isMenuOpen ? "sm:flex lg:items-center lg:w-full" : "hidden"
            }  ml-5 md:block w-full mt-2 pl-4 bg-gray-100`}  
           
          >
            <ul  className=" flex flex-col  md:justify-end md:flex-row  text-[1.4rem] font-medium lg:pr-4  lg:space-x-10 text-white ">
              <li  data-aos="fade-right" data-aos-delay="50"
            data-aos-duration="1000">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-6  duration-200  ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    }  hover:border-b-2 hover:bg-gray-50 lg:hover:bg-transparent  hover:text-orange-700 lg:p-0 hover:shadow-2xl transition duration-300 transform hover:scale-101`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li  data-aos="fade-right" data-aos-delay="50"
            data-aos-duration="1000">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 hover:shadow-2xl transition duration-300 transform hover:scale-101`
                  }
                >
                  About
                </NavLink>
              </li>
              <li  data-aos="fade-right" data-aos-delay="50"
            data-aos-duration="1000">
                <NavLink
                  to="/team"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 hover:shadow-2xl transition duration-300 transform hover:scale-101`
                  }
                >
                  Team
                </NavLink>
              </li>
              <li  data-aos="fade-right" data-aos-delay="50"
            data-aos-duration="1000">
                <NavLink
                  to="/reports"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 hover:shadow-2xl transition duration-300 transform hover:scale-101`
                  }
                >
                  Projects
                </NavLink>
              </li>
              {/* <li  data-aos="fade-right" data-aos-delay="50"
            data-aos-duration="1000">
                <a
                  href="live_project"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 hover:shadow-2xl transition duration-300 transform hover:scale-101`
                  }
                >
                  Live Projects
                </a>
              </li> */}
              <li  data-aos="fade-right" data-aos-delay="50"
            data-aos-duration="1000">
                <NavLink
                  to="/gallery"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 hover:shadow-2xl transition duration-300 transform hover:scale-101`
                  }
                >
                  Gallery
                </NavLink>
              </li>
              <li  data-aos="fade-right" data-aos-delay="50"
            data-aos-duration="1000">
                <NavLink
                  to="/events"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 hover:shadow-2xl transition duration-300 transform hover:scale-101`
                  }
                >
                  Events
                </NavLink>
              </li>
              <li  data-aos="fade-right" data-aos-delay="50"
            data-aos-duration="1000">
                <NavLink
                  to="/media"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 hover:shadow-2xl transition duration-300 transform hover:scale-101`
                  }
                >
                  Media
                </NavLink>
              </li>
              <li  data-aos="fade-right" data-aos-delay="50"
            data-aos-duration="1000">
                <NavLink
                  to="/join-us"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 hover:shadow-2xl transition duration-300 transform hover:scale-101`
                  }
                >
                  <button className="w-32 bg-gray-800 rounded-[20px]  text-white">Join us </button>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    </>
  );
}
