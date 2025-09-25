import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdMenu, MdClose } from "react-icons/md";
import logo from "../images/IISD.855d404de3a326ca6293.webp";
import image1 from "../images/Azadi-Ka-Amrit.597390719c236104560f.webp";
import image2 from "../images/g20.719c747b9026a83a245b.webp";
import image3 from "../images/skill-india.496d43bf990bfdbf029b.webp";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header>
      {/* 🔹 Top Bar */}
      <div className="bg-[#003366] text-white text-sm px-4 md:px-8 py-2 flex justify-between items-center">
        <div className="flex items-center gap-4 md:gap-6">
          <span className="flex items-center gap-2">
            <FaPhoneAlt /> +91-8130543714
          </span>
          <span className="flex items-center gap-2">
            <FaEnvelope /> info@gmail.com
          </span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-lg">
          <FaFacebookF className="cursor-pointer hover:text-gray-300" />
          <FaTwitter className="cursor-pointer hover:text-gray-300" />
          <FaYoutube className="cursor-pointer hover:text-gray-300" />
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="hover:underline">Centre Login</a>
          <a href="/Results" className="hover:underline">Online Results</a>
        </div>
        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {menuOpen ? <MdClose /> : <MdMenu />}
        </div>
      </div>

      {/* 🔹 Middle Header */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-8 py-4 gap-4 md:gap-0">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Logo" className="h-20" />
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-black leading-snug">
              INDIAN INSTITUTE OF SKILL DEVELOPMENT
            </h1>
            <span className="block text-base md:text-lg font-semibold text-gray-800">
              भारतीय कौशल विकास संस्थान
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 md:gap-10 flex-wrap justify-center">
          <img src={image1} alt="Azadi" className="h-20 w-24 object-contain" />
          <img src={image2} alt="G20" className="h-20 w-24 object-contain" />
          <img src={image3} alt="Skill India" className="h-20 w-24 object-contain" />
        </div>
      </div>

      {/* 🔹 Navigation Bar */}
      <nav className="bg-[#003366] relative">
        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center gap-6 py-3 text-white font-semibold text-sm flex-wrap">
          <li><a href="/" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">About Us</a></li>
          <li><a href="#" className="hover:underline">Programs</a></li>
          <li><a href="#" className="hover:underline">Institute Zone</a></li>
          <li><a href="#" className="hover:underline">Student Zone</a></li>
          <li><a href="#" className="hover:underline">Franchise</a></li>
          <li><a href="#" className="hover:underline">Internship</a></li>
          <li><a href="#" className="hover:underline">Training</a></li>
          <li><a href="#" className="hover:underline">Placement</a></li>
          <li><a href="#" className="hover:underline">Downloads</a></li>
          <li><a href="#" className="hover:underline">Notifications</a></li>
          <li><a href="#" className="hover:underline">Contact Us</a></li>
        </ul>

        {/* Mobile Slide-in Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-[#003366] z-20 transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden shadow-lg`}
        >
          <ul className="flex flex-col gap-3 py-8 px-6 text-white font-semibold text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Programs</a></li>
            <li><a href="#" className="hover:underline">Institute Zone</a></li>
            <li><a href="#" className="hover:underline">Student Zone</a></li>
            <li><a href="#" className="hover:underline">Franchise</a></li>
            <li><a href="#" className="hover:underline">Internship</a></li>
            <li><a href="#" className="hover:underline">Training</a></li>
            <li><a href="#" className="hover:underline">Placement</a></li>
            <li><a href="#" className="hover:underline">Downloads</a></li>
            <li><a href="#" className="hover:underline">Notifications</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li className="flex items-center gap-4 mt-4">
              <FaFacebookF className="cursor-pointer hover:text-gray-300" />
              <FaTwitter className="cursor-pointer hover:text-gray-300" />
              <FaYoutube className="cursor-pointer hover:text-gray-300" />
            </li>
            <li className="mt-4"><a href="#" className="hover:underline">Centre Login</a></li>
            <li><a href="/Results" className="hover:underline">Online Results</a></li>
          </ul>
        </div>

        {/* Overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 z-10 md:hidden"
            onClick={toggleMenu}
          ></div>
        )}
      </nav>
    </header>
  );
};

export default Header;
