import React from "react";
import { Link } from "react-router-dom";
import {
  FaCut,
  FaPlane,
  FaLaptop,
  FaStethoscope,
  FaMagic,
  FaBriefcase,
  FaWrench,
  FaPalette,
  FaGraduationCap,
  FaShieldAlt,
} from "react-icons/fa";

export default function SchoolsSection() {
  const schools = [
    { name: "School of Fashion & Apparel", icon: <FaCut />, color: "bg-pink-500", iconColor: "text-white" },
    { name: "School of Hospitality, Tourism & Aviation", icon: <FaPlane />, color: "bg-blue-500", iconColor: "text-white" },
    { name: "School of Digital Technologies & Computer Science", icon: <FaLaptop />, color: "bg-purple-500", iconColor: "text-white" },
    { name: "School of Health & Paramedical Sciences", icon: <FaStethoscope />, color: "bg-red-500", iconColor: "text-white" },
    { name: "School of Beauty, Cosmetology & Aesthetics", icon: <FaMagic />, color: "bg-pink-400", iconColor: "text-white" },
    { name: "School of Business, Management & Entrepreneurship", icon: <FaBriefcase />, color: "bg-yellow-500", iconColor: "text-white" },
    { name: "School of Technical & Engineering Skills", icon: <FaWrench />, color: "bg-gray-700", iconColor: "text-white" },
    { name: "School of Media, Design & Creative Arts", icon: <FaPalette />, color: "bg-purple-600", iconColor: "text-white" },
    { name: "School of Teacher Education & Child Development", icon: <FaGraduationCap />, color: "bg-green-500", iconColor: "text-white" },
    { name: "School of Fire, Safety & Environmental Studies", icon: <FaShieldAlt />, color: "bg-orange-500", iconColor: "text-white" },
  ];

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Our Schools & Programs
        </h2>

        {/* school cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {schools.map((school, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-6 flex flex-col items-start gap-4 hover:shadow-xl transition rounded-xl"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center ${school.color} ${school.iconColor} text-2xl mb-4 rounded-lg`}
              >
                {school.icon}
              </div>
              <h3 className="font-semibold text-lg md:text-xl text-gray-900 mb-2">
                {school.name}
              </h3>

              <Link
                to="/school-details"
                className="border border-gray-300 px-4 py-2 rounded-md text-gray-700 hover:bg-yellow-400 transition w-full text-center"
              >
                View Programs
              </Link>
            </div>
          ))}
        </div>

        {/* bottom buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
          <Link
            to="/school-details"
            className="bg-[#1a4e92] text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Student Admission Form
          </Link>
          <Link
            to="/school-details"
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
          >
            Certificate Verification
          </Link>
        </div>
      </div>
    </section>
  );
}
