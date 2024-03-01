// Team.js

import React from "react";
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
            className=" flex justify-center items-center pt-10"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
          >
           <div className="team-member mt-4 bg-white p-1 rounded-md shadow-md h-auto w-[360px] ">
              <img
                src={sumit}
                alt="Sumit Kataria"
                className="  w-full h-96   mb-4 rounded-md  transition-transform transform hover:scale-105"
              />
              <div className="text-center">
                <h2 className="text-xl font-bold mb-2 ">Mr. SUMIT KATARIA</h2>
              </div>
            </div>
            <div className="flex justify-center items-center w-[40%] text-xl pl-20">
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
