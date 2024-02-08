import React from 'react';
import {  im1,  im2,im3,im4,im5,  im6,im7,im8,im9, person,
  akshat,
  sumit, } from '../../assets/image';
  import { RxAvatar } from "react-icons/rx";


const TeamMember = ({ name, imgSrc }) => {
  return (
    <div className="relative group" data-aos="fade-up">
      <img src={imgSrc} alt={name} className="rounded-md w-56 h-60" />
      <div  className="absolute bottom-0 right-0 w-full h-[50%] bg-gray-600  opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center" >
        <p className="text-white font-bold">{name}</p>

      </div>
    </div>
  );
};

export default function TeamPage() {
  const teamMembers = [
      {
        id: 1,
        image: im1,
        name: "SULABH BAFNA",
        about:
          "Meet our skilled team member, bringing creativity and expertise to Elegant Entrepreneur.",
      },
      {
        id: 2,
        image: im2,
        name: "ANKITA KATARIA",
        about:
          "Passionate about entrepreneurship, our team member is dedicated to supporting your business journey.",
      },
      {
        id: 3,
        image: im3,
        name: "SUDHIR JAIN",
        about:
          "With a focus on innovation, our team member contributes valuable insights to Elegant Entrepreneur.",
      },
      {
        id: 4,
        image: im4,
        name: "DEEPESH KOTHARI",
        about:
          "Bringing a wealth of experience, our team member is committed to your success at Elegant Entrepreneur.",
      },
      {
        id: 5,
        image: im5,
        name: "VIKAS BANTHIYA",
        about:
          "Dedicated to skill development, our team member is here to guide you on your entrepreneurial path.",
      },
      {
        id: 6,
        image: im6,
        name: "ANKIT GHIA",
        about:
          "Passionate about creating a positive impact, our team member is an integral part of Elegant Entrepreneur.",
      },
      {
        id: 7,
        image: im7,
        name: "SUMIT MOONAT",
        about:
          "Committed to excellence, our team member works tirelessly to elevate the Elegant Entrepreneur experience.",
      },
      {
        id: 8,
        image: im8,
        name: "PRATEEK BAFNA",
        about:
          "With a strategic mindset, our team member plays a crucial role in shaping the future of entrepreneurship.",
      },
      { id: 9, name: "AKSHAT KOTHARI", image: akshat },
    { id: 10, name: "NIVEDITA BAFNA", image: person },
    { id: 11, name: "TARUN KHANDELWAL", image: person },
    { id: 12, name:"NEELU BAFNA" , image: person },
    { id: 13, name: "RIYA KOTHARI", image: person },
    { id: 14, name: "NIVEDITA BAFNA", image: person },
    { id: 15, name: "YASH JAIN", image: person },
    { id: 16, name: "SURBHI JAIN", image: person },
    { id: 17, name: "SHREYANSH JAIN", image: person },
    { id: 18, name: "ANUJ GADIA", image: person },
    { id: 19, name: "AMIT GADIA", image: person },
    { id: 20, name: "GARIMA KOTHARI", image: person },
    { id: 21, name: "KAVITA GHIA", image: person },
    { id: 22, name: "PRIYANKA GADIA", image: person },
    { id: 23, name: "SHIKHA BANTHIYA", image: person },
    { id: 24, name: "NEHA JAIN", image: person },
    { id: 25, name: "AVINASH JAIN", image: person },
    { id: 26, name: "AYUSH JAIN", image: person },
    { id: 27, name: "DEEPAK JAIN", image: person },
    { id: 28, name: "PRANEET SURYA", image: person },
    { id: 29, name: "RITHAM GIRIYA", image: person },
    { id: 30, name: "SUYASH JAIN", image: person },
    { id: 31, name: "TANUSH JAIN", image: person }
      
    
    // Add more team members as needed
  ];

  return (
    <div className="flex flex-wrap justify-center gap-x-4 gap-y-5">
      {teamMembers.map((member, index) => (
        <TeamMember key={index} name={member.name} imgSrc={member.image} />
      ))}
    </div>
  );
}
