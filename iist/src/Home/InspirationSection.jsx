import React from "react";
import pmImage from "../images/modi.d65a6452196b8cc872b3.webp"; 
import kalamImage from "../images/abdul.4acdbc8bc0bb348bb21f.webp"; 
import orgLogo from "../images/IISD.855d404de3a326ca6293.webp"; 

export default function InspirationSection() {
  return (
    <div className="bg-white px-6 md:px-16 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side - Our Inspirations */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 uppercase mb-6">
            Our Inspirations
          </h2>

          {/* PM Modi */}
          <div className="flex gap-6 mb-8">
            <img
              src={pmImage}
              alt="PM Modi"
              className="w-40 h-40 object-cover rounded-md shadow-md"
            />
            <p className="text-gray-800 leading-relaxed">
              Prime Minister Modi's launch of the Skill India campaign inspired
              IISD to focus on building a skilled workforce. His emphasis on
              quality education motivated IISD to create industry-relevant
              programs for students and educators.
            </p>
          </div>

          {/* Dr. APJ Abdul Kalam */}
          <div className="flex gap-6">
            <img
              src={kalamImage}
              alt="Dr. Kalam"
              className="w-40 h-40 object-cover rounded-md shadow-md"
            />
            <p className="text-gray-800 leading-relaxed">
              Dr. Kalam’s vision of empowering India through skill development
              inspires IISD to expand the nation's skill ecosystem. We emphasize
              continuous learning and applying the right skills, following Dr.
              Kalam’s guiding principles.
            </p>
          </div>
        </div>

        {/* Right Side - Organisation Profile */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 uppercase mb-6">
            Organisation Profile
          </h2>

          {/* Logo + Text */}
          <div className="flex items-start gap-6 mb-6">
            <img
              src={orgLogo}
              alt="Organisation Logo"
              className="w-36 h-36 object-contain"
            />
            <p className="text-gray-800 leading-relaxed">
              The Indian Institute of Skill Development (IISD) was founded with
              a mission to bridge the skill gap in India through quality
              training and online certification programs. Our mission is to help
              students and professionals gain the practical skills they need for
              successful careers.
            </p>
          </div>

          <p className="text-gray-800 leading-relaxed mb-4">
            Our mission is to help students and professionals gain the practical
            skills they need for successful careers. Our programs are
            industrially based and job-oriented, catering to employees working
            in various industries, workshops, factories, organizations, and
            educational institutes.
          </p>

          <p className="text-gray-800 leading-relaxed mb-6">
            IISD is an autonomous institution focused on providing intensive
            training in job-oriented fields such as Computer & IT, Fashion &
            Interior Designing, Business Management, Hotel Management, Teacher
            Training, and various technical skills.
          </p>

          {/* Button */}
          <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* ---- NEW SECTION: Buttons ---- */}
      <div className="flex flex-wrap justify-center gap-30 mt-16">
        <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
          Placement Cell
        </button>
        <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
          Student Login
        </button>
        <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
          Center Login
        </button>
        <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition">
          Center Invitation
        </button>
      </div>
    </div>
  );
}
