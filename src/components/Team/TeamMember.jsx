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
  person,
  aditya,
  anjali,
  anshu,
  ayush,
  ayushjain,
  deepak,
  prayank,
  drsamiksha,
  pritisu,
  saloni,
  ruchi,
  shreyansh,
  surbhi,
  suyash,
  akshat,
  tarun,
  kavita,
  siksha,
  anuj,
  surbhijain,
  yashwardhan,
  riyakothari,
} from "../../assets/image";
// import { RxAvatar } from "react-icons/rx";

const TeamMember = ({ name, imgSrc, about }) => {
  return (
    <div className="relative group" data-aos="fade-up">
      <img src={imgSrc} alt={name} className="rounded-md w-56 h-60" />
      <div className="absolute bottom-0 right-0 w-full h-60 bg-black  opacity-0 group-hover:opacity-80 transition duration-300 flex items-end justify-center text-center">
        <div className="bg-black w-full px-1 pb-4">
          <p className="text-white font-bold text-2xl pb-1 uppercase">{name}</p>
          <p className="text-white">{about}</p>
        </div>
      </div>
    </div>
  );
};

export default function TeamPage() {
  const teamMembers = [
    { name: "AKSHAT KOTHARI", image: akshat, about: "Texttile Industry & Real Estate developer" },

    {
      image: im1,
      name: "SULABH BAFNA",
      about:
        "",
    },
    {
      id: 2,
      image: im2,
      name: "ANKITA KATARIA",
      about: "",
    },
    {
      image: im3,
      name: "SUDHIR JAIN",
      about: "",
    },
    { name: "Ayush Jain", image: ayushjain, about: "Jain Jewellers" },

    {
      image: im4,
      name: "DEEPESH KOTHARI",
      about: "",
    },
    { name: "Aditya Surya", image: aditya, about: "Founder of G.S. Metillica" },
    { name: "Priti Surya", image: pritisu, about: "" },
    { name: "CA Anjali Jain", image: anjali, about: "" },
    { name: "Anshu Jain", image: anshu, about: "Real Estate Developer" },

    {
      image: im5,
      name: "VIKAS BANTHIYA",
      about: "",
    },

    {
      image: im8,
      name: "PRATEEK BAFNA",
      about: "",
    },
    { name: "KAVITA GHIA", image: kavita, about: "Founder of Hello Kids" },
    { name: "CA RIYA KOTHARI", image: riyakothari, about: "" },
    {
      image: im6,
      name: "ANKIT GHIA",
      about: "",
    },
    {
      image: im7,
      name: "SUMIT MOONAT",
      about: "",
    },
    { name: "Siksha Bhatia", image: siksha, about: "Dietitian & Nutritionist" },
    { name: "TARUN KHANDELWAL", image: tarun, about: "" },
    { name: "NIVEDITA BAFNA", image: person, about: "" },
    { name: "SURBHI JAIN", image: surbhi, about: "" },
    { name: "SHREYANSH JAIN", image: shreyansh, about: "works at ICICI Bank as Manager",
    },
    { name: "ANUJ GADIA", image: anuj, about: "" },
    { name: "Prayank Surya", image: prayank, about: "Founder of Rukmani Impex" },
    { name: "DEEPAK Ora", image: deepak, about: "Founder of Elite Industry" },
    { name: "Ayush Jain", image: ayush, about: "Real Estate Developer" },
    { name: "SUYASH JAIN", image: suyash, about: "Works at EY Finance as Manager" },
    { name: "Yashwardhan Jain", image: yashwardhan, about: "" },
    { name: "AMIT GADIA", image: person, about: "" },
    { name: "Ruchi Ora", image: ruchi, about: "" },
    { name: "Saloni Suraya", image: saloni, about: "" },
    { name: "Dr. Samiksha", image: drsamiksha, about: "Dentist" },
    { name: "Surbhi Jain", image: surbhijain, about: "" },
    // non-profile photo
    { name: "GARIMA KOTHARI", image: person, about: "" },
    { name: " PRIYANKA GADIA", image: person, about: "" },
    { name: "SHIKHA BANTHIYA", image: person, about: "" },
    { name: "NEHA JAIN", image: person, about: "" },
    { name: "AVINASH JAIN", image: person, about: "" },
    { name: "DEEPAK JAIN", image: person, about: "" },
    { name: "PRANEET SURYA", image: person, about: "" },
    { name: "NEELU BAFNA", image: person, about: "" },
    { name: "RITHAM GIRIYA", image: person, about: "" },
    { name: "TANUSH JAIN", image: person, about: "" },

    // Add more team members as needed
  ];

  return (
    <div className="flex flex-wrap justify-center gap-x-4 gap-y-5">
      {teamMembers.map((member) => (
        <TeamMember
          name={member.name}
          imgSrc={member.image}
          about={member.about}
        />
      ))}
    </div>
  );
}
