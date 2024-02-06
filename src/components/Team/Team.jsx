// Team.js

import React from "react";
import {
  im1,  im2,im3,im4,im5,  im6,im7,im8,im9,
  akshat,
  sumit,
} from "../../assets/image";

const Team = () => {
  const teamData = [
    {
      id: 1,
      image: im1,
      title: "Team Member 1",
      about:
        "Meet our skilled team member, bringing creativity and expertise to Elegant Entrepreneur.",
    },
    {
      id: 2,
      image: im2,
      title: "Team Member 2",
      about:
        "Passionate about entrepreneurship, our team member is dedicated to supporting your business journey.",
    },
    {
      id: 3,
      image: im3,
      title: "Team Member 3",
      about:
        "With a focus on innovation, our team member contributes valuable insights to Elegant Entrepreneur.",
    },
    {
      id: 4,
      image: im4,
      title: "Team Member 4",
      about:
        "Bringing a wealth of experience, our team member is committed to your success at Elegant Entrepreneur.",
    },
    {
      id: 5,
      image: im5,
      title: "Team Member 5",
      about:
        "Dedicated to skill development, our team member is here to guide you on your entrepreneurial path.",
    },
    {
      id: 6,
      image: im6,
      title: "Team Member 6",
      about:
        "Passionate about creating a positive impact, our team member is an integral part of Elegant Entrepreneur.",
    },
    {
      id: 7,
      image: im7,
      title: "Team Member 7",
      about:
        "Committed to excellence, our team member works tirelessly to elevate the Elegant Entrepreneur experience.",
    },
    {
      id: 8,
      image: im8,
      title: "Team Member 8",
      about:
        "With a strategic mindset, our team member plays a crucial role in shaping the future of entrepreneurship.",
    },
  ];

  return (
    <div className=" ">
      <div className=" ">
             
       
        <div className="team_heads mb-5  " >
           <div className="bg-gray-700 ">
             <h2 className="py-10 text-white   duration-200 text-3xl font-sans text-center ">Germinators</h2>
           </div>
           <div className="text-center text-black text-xl">Team Elegant Entrepreneur</div>
          <div className=" flex justify-center ">
            <div className="team-member mt-4 bg-white p-1 rounded-md shadow-md h-auto w-[300px] ">
              <img
                src={sumit}
                 
                alt="Sumit Kataria"
                className="w-full h-80 object-contain  mb-4 rounded-md  transition-transform transform hover:scale-105"
              />
              <div className="text-center">
              <h2 className="text-xl font-bold mb-2">Mr. Sumit Kataria</h2>
              <p className="text-gray-700"><b>Founder</b></p>
              </div>
            </div>
          </div>
        </div>

        {/* cultivators */}
        <div className="bg-gray-700 text-white font-bold text-2xl   uppercase h-20 flex justify-center items-center ">
             <div>Cultivators</div>
           </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-6 mt-6  gap-x-10  gap-y-4">
          {teamData.map((teamMember) => (
            <div
              key={teamMember.id}
              className="bg-white p-1 rounded-lg shadow-md"
            >
              <img
                src={teamMember.image}
                alt={`Team Member ${teamMember.id}`}
                className="w-full h-80 object-cover mb-4 rounded-md transition-transform transform hover:scale-105"
              />
              <h3 className=" hidden  text-lg font-semibold mb-2">
                {teamMember.title}
              </h3>
              {/* <p className="text-gray-700">{teamMember.about}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
