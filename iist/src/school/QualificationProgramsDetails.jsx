import React from "react";
import { FaCertificate, FaListAlt, FaClock, FaGraduationCap } from "react-icons/fa";

export default function QualificationPrograms() {
  const qualifications = [
    { level: "ISC Level 3", duration: "3 Months", title: "Certificate in Fashion & Apparel Skills" },
    { level: "ISC Level 4", duration: "6 Months", title: "Diploma in Fashion Design & Production" },
    { level: "ISC Level 5", duration: "12 Months", title: "Advanced Diploma in Fashion & Garment Technology" },
  ];

  const programs = [
    { name: "Fashion Design & Garment Construction", level: "L4 / L5", duration: "6 / 12 Months" },
    { name: "Pattern Making & Fabric Technology", level: "L3 / L4", duration: "3 / 6 Months" },
    { name: "Textile Design & Surface Ornamentation", level: "L4", duration: "6 Months" },
    { name: "Fashion Styling & Visual Merchandising", level: "L3", duration: "3 Months" },
    { name: "Apparel Production & Quality Control", level: "L4 / L5", duration: "6 / 12 Months" },
    { name: "Boutique Management & Custom Tailoring", level: "L3 / L4", duration: "3 / 6 Months" },
    { name: "Fashion Illustration & CAD Design", level: "L3 / L4", duration: "3 / 6 Months" },
    { name: "Industrial Stitching & Machine Operations", level: "L3", duration: "3 Months" },
  ];

  return (
    <section className="bg-[#f9fafc] py-10 px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Qualification Levels Offered */}
        <div className="bg-white rounded-3xl shadow-md p-8 md:p-10 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <FaCertificate className="text-[#1a4e92] text-3xl" />
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a4e92]">
              Qualification Levels Offered
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1a4e92] text-white">
                  <th className="py-3 px-5 rounded-l-lg font-semibold">Level</th>
                  <th className="py-3 px-5 font-semibold">Duration</th>
                  <th className="py-3 px-5 rounded-r-lg font-semibold">Title</th>
                </tr>
              </thead>
              <tbody>
                {qualifications.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 hover:bg-blue-50 transition"
                  >
                    <td className="py-3 px-5 font-medium text-gray-800">{item.level}</td>
                    <td className="py-3 px-5 text-gray-700 flex items-center gap-2">
                      <FaClock className="text-[#1a4e92]" /> {item.duration}
                    </td>
                    <td className="py-3 px-5 text-gray-700">{item.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Program List */}
        <div className="bg-white rounded-3xl shadow-md p-8 md:p-10 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <FaListAlt className="text-[#1a4e92] text-3xl" />
            <h3 className="text-3xl md:text-4xl font-bold text-[#1a4e92]">
              Program List
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1a4e92] text-white">
                  <th className="py-3 px-5 rounded-l-lg font-semibold">Program Name</th>
                  <th className="py-3 px-5 font-semibold">Level</th>
                  <th className="py-3 px-5 rounded-r-lg font-semibold">Duration</th>
                </tr>
              </thead>
              <tbody>
                {programs.map((program, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 hover:bg-blue-50 transition"
                  >
                    <td className="py-3 px-5 flex items-center gap-2 text-gray-800 font-medium">
                      <FaGraduationCap className="text-[#1a4e92]" />
                      {program.name}
                    </td>
                    <td className="py-3 px-5 text-gray-700">{program.level}</td>
                    <td className="py-3 px-5 text-gray-700">{program.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
