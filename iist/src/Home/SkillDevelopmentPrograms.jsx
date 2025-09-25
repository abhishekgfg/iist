import React from "react";

// Import images
import csImage from "../images/ComputerScienceand IT-min.c7f0944a13a56918092d.webp";
import teacherImage from "../images/teachertrainingicon-min.d40201f607973d2c2b83.webp";
import hospitalImage from "../images/HospitalandHealhManagementicon-min.6e9b09d997aa34cdd722.webp";
import beautyImage from "../images/BeautyWellnessandCosmetics-min.bb3992c2b746aba3f411.webp";
import artsImage from "../images/ArtsandPaintings-min.33d059186ae9a38d8308.webp";
import tailoringImage from "../images/Tailoring-min.586f38717e25555646c2.webp";
import businessImage from "../images/BusinessManagement-min.3f01e97603804d6dcb67.webp";
import safetyImage from "../images/safety-management-leadership-min.7c10e6107c9ecccdfaf1.webp";

// Program data with imported images
const programs = [
  { title: "Computer Science and IT", img: csImage },
  { title: "Teacher Training", img: teacherImage },
  { title: "Hospital and Health Management", img: hospitalImage },
  { title: "Beauty, Wellness and Cosmetics", img: beautyImage },
  { title: "Arts and Paintings", img: artsImage },
  { title: "Tailoring", img: tailoringImage },
  { title: "Business Management", img: businessImage },
  { title: "Safety Management", img: safetyImage },
];

export default function OurAssociates() {
  return (
    <div className="bg-white py-10">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-blue-900 uppercase">
          Skill Development Programs
        </h2>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 md:px-16">
        {programs.map((program, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-md group"
          >
            <img
              src={program.img}
              alt={program.title}
              className="w-full h-52 object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-2 font-semibold">
              {program.title}
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-10">
        <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
          Explore More
        </button>
      </div>
    </div>
  );
}
