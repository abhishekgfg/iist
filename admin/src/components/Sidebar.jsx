import React from "react";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBook,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaFileAlt,
  FaCalendarAlt,
  FaUsers,
} from "react-icons/fa";

const Sidebar = () => {
  const sections = [
    {
      title: "Student",
      links: [
        { name: "Dashboard", icon: <FaTachometerAlt />, path: "#" },
        { name: "Programs", icon: <FaBook />, path: "/Programs" },
        { name: "Courses", icon: <FaFileAlt />, path: "/courses" },
        { name: "Assignments", icon: <FaBook />, path: "#" },
      ],
    },
    {
      title: "Admin",
      links: [
        { name: "Dashboard", icon: <FaTachometerAlt />, path: "#" },
        { name: "Students", icon: <FaUserGraduate />, path: "#" },
        { name: "Teachers", icon: <FaChalkboardTeacher />, path: "#" },
        { name: "Reports", icon: <FaFileAlt />, path: "#" },
        { name: "Timetable", icon: <FaCalendarAlt />, path: "#" },
        { name: "Users", icon: <FaUsers />, path: "#" },
      ],
    },
  ];

  return (
    <div className="w-64 bg-gray-800 text-white h-full p-4 flex flex-col">
      {/* Logo + Name */}
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white">
          ERP
        </div>
        <span className="ml-3 text-xl font-bold">My School ERP</span>
      </div>

      {/* Sections */}
      <div className="flex-1 overflow-y-auto">
        {sections.map((section, idx) => (
          <div key={idx} className="mb-6">
            <h3 className="text-gray-400 font-semibold mb-2 border-b border-gray-600 pb-1">
              {section.title}
            </h3>
            <ul>
              {section.links.map((link, i) => (
                <li key={i} className="mb-2">
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 px-2 py-2 rounded hover:bg-gray-700 transition"
                  >
                    <span>{link.icon}</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
