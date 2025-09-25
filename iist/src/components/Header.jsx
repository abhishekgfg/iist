import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import logo from "../images/IISD.855d404de3a326ca6293.webp";
import image1 from "../images/Azadi-Ka-Amrit.597390719c236104560f.webp";
import image2 from "../images/g20.719c747b9026a83a245b.webp";
import image3 from "../images/skill-india.496d43bf990bfdbf029b.webp";  

const Header = () => {
  return (
    <header>
      {/* 🔹 Top Bar */}
      <div className="bg-[#003366] text-white text-sm px-8 py-2 flex justify-between items-center">
        {/* Left: Phone + Email */}
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <FaPhoneAlt /> +91-8130543714
          </span>
          <span className="flex items-center gap-2">
            <FaEnvelope /> info@gmail.com
          </span>
        </div>
  <div className="flex items-center gap-4 text-lg">
            <FaFacebookF className="cursor-pointer hover:text-gray-300" />
            <FaTwitter className="cursor-pointer hover:text-gray-300" />
            <FaYoutube className="cursor-pointer hover:text-gray-300" />
          </div>
        {/* Right: Social + Links */}
        <div className="flex items-center gap-6">
        
          <a href="#" className="hover:underline">
            Centre Login
          </a>
          <a href="/Results" className="hover:underline">
            Online Results
          </a>
        </div>
      </div>

      {/* 🔹 Middle Header */}
      <div className="flex justify-between items-center px-8 py-4">
        {/* Left: Logo + Title */}
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="Logo"
            className="h-20"
          />
        <div>
  <h1 className="text-xl md:text-2xl font-bold text-black leading-snug">
    INDIAN INSTITUTE OF SKILL DEVELOPMENT
  </h1>
  <span className="block text-base md:text-lg font-semibold text-gray-800">
    भारतीय कौशल विकास संस्थान
  </span>
</div>


        </div>

        {/* Right: Govt Logos */}
<div className="flex items-center gap-10">
  <img
    src={image1}
    alt="Azadi"
    className="h-20 w-30 object-contain"
  />
  <img
    src={image2}
    alt="G20"
    className="h-20 w-30 object-contain"
  />
  <img
    src={image3}
    alt="Skill India"
    className="h-20 w-30 object-contain"
  />
</div>

      </div>

      {/* 🔹 Navigation Bar */}
      <nav className="bg-[#003366]">
        <ul className="flex justify-center gap-10 py-3 text-white font-semibold text-sm">
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
      </nav>
    </header>
  );
};

export default Header;
