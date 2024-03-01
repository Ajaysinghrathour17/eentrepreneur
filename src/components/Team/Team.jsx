// Team.js

import React from "react";
import {FaInstagram, FaYoutube, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  im1,
  im2,
  im3,
  im4,
  im5,
  im6,
  im7,
  im8,
  akshat,
  sumit,
  gallery2,
} from "../../assets/image";
import TeamPage from "./TeamMember";

const Team = () => {
  const teamData = [
    {
      id: 1,
      image: im1,
      name: "Team Member 1",
      about:
        "Meet our skilled team member, bringing creativity and expertise to Elegant Entrepreneur.",
    },
    {
      id: 2,
      image: im2,
      name: "Team Member 2",
      about:
        "Passionate about entrepreneurship, our team member is dedicated to supporting your business journey.",
    },
    {
      id: 3,
      image: im3,
      name: "Team Member 3",
      about:
        "With a focus on innovation, our team member contributes valuable insights to Elegant Entrepreneur.",
    },
    {
      id: 4,
      image: im4,
      name: "Team Member 4",
      about:
        "Bringing a wealth of experience, our team member is committed to your success at Elegant Entrepreneur.",
    },
    {
      id: 5,
      image: im5,
      name: "Team Member 5",
      about:
        "Dedicated to skill development, our team member is here to guide you on your entrepreneurial path.",
    },
    {
      id: 6,
      image: im6,
      name: "Team Member 6",
      about:
        "Passionate about creating a positive impact, our team member is an integral part of Elegant Entrepreneur.",
    },
    {
      id: 7,
      image: im7,
      name: "Team Member 7",
      about:
        "Committed to excellence, our team member works tirelessly to elevate the Elegant Entrepreneur experience.",
    },
    {
      id: 8,
      image: im8,
      name: "Team Member 8",
      about:
        "With a strategic mindset, our team member plays a crucial role in shaping the future of entrepreneurship.",
    },
  ];

  return (
    <div className=" ">
      <div className=" ">
        <div className="team_heads mb-5  ">
          <div className="bg-gray-700 ">
            {/* <div className=" text-white text-center text-xl font-gilroy">Team Elegant Entrepreneur</div> */}

            <h2 className="py-10 text-white   duration-200 text-3xl font-sans text-center ">
              Germinators
            </h2>
          </div>
         
         <div className="bg-gray-100">
         <div
            className=" md:flex justify-center items-center pt-10"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
          >
           <div className="team-member mt-4 bg-white p-1 rounded-md shadow-md h-auto w-[360px] ">
              <img
                src={sumit}
                alt="Sumit Kataria"
                className="  w-full h-96   mb-4 rounded-md  transition-transform transform"
              />
              <div className="text-center">
                <h2 className="text-xl font-bold  ">Mr. SUMIT KATARIA</h2>
                <p className="font-medium">Finance Professional and Entrepreneur</p>
                <div className="flex justify-center space-x-4  py-2">
      {/* Facebook */}
      <a
        href="https://www.facebook.com/sumit.kataria.5682"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook className="text-gray-600 hover:text-blue-800 w-6 h-6" />
      </a>

      {/* LinkedIn */}
      
      {/* YouTube */}
      {/* <a
        href="https://www.youtube.com/@ElegantEntrepreneur/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaYoutube className="text-gray-600 hover:text-red-800 w-6 h-6" />
      </a> */}
      {/* Instagram */}
      <a
        href="https://www.instagram.com/mr.sumit.kataria/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="text-gray-600 hover:text-pink-700 w-6 h-6 " />
      </a>
      <a
        href="https://www.linkedin.com/in/elegant-entrepreneurs-7799a92b1/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="text-gray-600 hover:text-blue-700 w-6 h-6" />
      </a>

      {/* Twitter */}
      {/* <a href="#"  rel="noopener noreferrer">
        <FaXTwitter className="text-gray-600 hover:text-blue-600 w-6 h-6" />
      </a> */}
    </div>
              </div>
            </div>

            <div className=" w-[60%] text-md pl-20">
                <div>
            <p>
             A Finance Professional and Entrepreneur, combines a robust finance
background with a fervent entrepreneurial spirit to drive innovation and growth in the
business world. With expertise in financial analysis, investment management, and
strategic planning, Sumit has successfully launched and managed ventures across diverse
segments. As Finance Manager at Kataria Group, he leads financial analysis, develops
strategic investment plans, and manages client portfolios. Additionally, as Sumit
spearheads product development initiatives, oversees business operations, and fosters
strategic partnerships. Sumit holds an MBA in Finance from Manipal University Sikkim and
a B.Com in Accounting and schooling from Daly College . Recognized for exceptional
portfolio management skills, he secured funding for Innovate Solutions from various
venture capital firms and he also invested in approx 11 different innovative project include
of electronic vehicle technology and Sumit was awarded in finance and marketing by
the various dignitaries of financial field in both national and international countries for
outstanding contributions to the business community. Beyond work, Sumit stays updated
on finance and sports, mentors aspiring Entrepreneurs, and volunteers for community
development project
            </p>
            </div> <br />
              <div>
                <p>
                  "Empowering the next generation of entrepreneurs starts with
                  fostering a community of innovation, collaboration, and
                  boundless ambition. With Sumit Kataria at the helm, we're not
                  just building a business, we're nurturing a tribe of elegant
                  entrepreneurs, igniting the spark of creativity and
                  determination in young minds, shaping a future where
                  brilliance knows no bounds."
                </p>

                <div className="flex justify-center  pb-6 md:px-6 mt-6">
                  <button className=" bg-gray-800 text-white px-4 py-2 rounded-[20px] shadow-md hover:bg-gray-700 transition-colors duration-300 text-xl font-semibold">
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSeAZ5VE6tWQFfS-b-1pWTKU6mfEqdoFumIyJ4P4I6aZMO4vAA/viewform"
                      className="px-10"
                    >
                      
                      Join
                    </a>
                  </button>
                </div>
              </div>
            </div> 
            {/*  */}
          </div>

                <div className="flex justify-evenly px-20 pt-20">
                    {/* akshat */}  
           <div className="relative group mx-2" data-aos="fade-up">
              <img src={akshat} alt="Sumit Kataria" className="rounded-md w-72 h-80" />
              <div className="absolute bottom-0 right-0 w-full h-80 bg-black  opacity-0 group-hover:opacity-80 transition duration-300 flex items-end justify-center text-center">
                <div className="bg-black w-full px-1 pb-4">
                  <p className="text-white font-bold text-2xl pb-1 uppercase">
                    Mr Akshat Kothari
                  </p>
                  <p className="text-white">Textile Industry and Real Estate Developer</p>
                </div>
              </div>
            </div>
            {/* sudhi jain */}
            <div className="relative group mx-2" data-aos="fade-up">
              <img src={im3} alt="Sumit Kataria" className="rounded-md w-72 h-80" />
              <div className="absolute bottom-0 right-0 w-full h-80 bg-black  opacity-0 group-hover:opacity-80 transition duration-300 flex items-end justify-center text-center">
                <div className="bg-black w-full px-1 pb-4">
                  <p className="text-white font-bold text-2xl pb-1 uppercase">
                    Mr Sudhir Jain
                  </p>
                  {/* <p className="text-white">{about}</p> */}
                </div>
              </div>
            </div>
                </div>
         </div>
            
        </div>

        {/* cultivators */}
        <div className="bg-gray-700 text-white font-bold text-2xl   uppercase h-20 flex justify-center items-center ">
          <div>Cultivators</div>
        </div>
        {/*  */}
      </div>

      <section className="mt-6 md:px-10 mb-5 ">
        <TeamPage />
      </section>
    </div>
  );
};

export default Team;
