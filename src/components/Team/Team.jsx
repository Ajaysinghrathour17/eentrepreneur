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
  im9,
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
    <div className=" py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 mx-6 text-center underline">
          Our Team
        </h2>
        <div className="team_heads">
          <div className="container flex justify-center gap-x-40">
            <div className="team-member bg-white p-1 rounded-md shadow-md h-full w-[300px] transition-transform transform hover:scale-105">
              <img
                src={akshat}
                alt="Akshat Kothari"
                className="w-full h-80 object-contain  mb-4 rounded-md "
              />
              <h2 className="text-xl font-bold mb-2">Mr. Akshat Kothari</h2>
              <p className="text-gray-700 mb-2">
                MBA from Cardiff University (UK)
              </p>
              <p className="text-gray-700">
                Founder of Parshw Capital & Global Venturas
              </p>
            </div>
            <div className="team-member bg-white p-1 rounded-md shadow-md h-[450px] w-[300px] transition-transform transform hover:scale-105">
              <img
                src={sumit}
                 
                alt="Sumit Kataria"
                className="w-full h-80 object-contain  mb-4 rounded-md "
              />
              <h2 className="text-xl font-bold mb-2">Mr. Sumit Kataria</h2>
              <p className="text-gray-700">Founder of Kataria Groups</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mx-6 mt-6  gap-x-10  gap-y-4">
          {teamData.map((teamMember) => (
            <div
              key={teamMember.id}
              className="bg-white p-1 rounded-lg shadow-md"
            >
              <img
                src={teamMember.image}
                alt={`Team Member ${teamMember.id}`}
                className="w-full h-60 object-cover mb-4 rounded-md"
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
