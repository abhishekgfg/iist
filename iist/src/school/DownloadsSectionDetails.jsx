import React from "react";
import { FaDownload, FaFileAlt, FaFileSignature } from "react-icons/fa";

export default function DownloadsSection() {
  const downloads = [
    {
      name: "Download Brochure",
      icon: <FaDownload className="text-2xl" />,
      link: "#", // replace with your brochure file link
      color: "bg-[#1a4e92]",
    },
    {
      name: "Student Admission Form",
      icon: <FaFileSignature className="text-2xl" />,
      link: "/admission-form", // replace with your admission form file link
      color: "bg-[#16437d]",
    },
    {
      name: "Exam Form",
      icon: <FaFileAlt className="text-2xl" />,
      link: "/exam-form", // replace with your exam form file link
      color: "bg-[#123764]",
    },
  ];

  return (
    <section className="bg-[#f9fafc] py-10 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center space-y-10">
        <h2 className="text-3xl md:text-4xl font-bold text-[#1a4e92]">
          Downloads & Forms
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Access important documents, admission and examination forms, and official brochures below.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {downloads.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className={`${item.color} text-white py-6 px-5 rounded-2xl shadow-md hover:shadow-lg hover:scale-[1.03] transition-transform flex flex-col items-center justify-center gap-3`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
              <span className="font-semibold text-lg">{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
