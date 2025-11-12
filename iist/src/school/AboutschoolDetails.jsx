import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function AboutschoolDetails() {
  const points = [
    "$2.5 Trillion global fashion economy",
    "India = 2nd largest apparel exporter globally",
    "Rising demand for sustainable + ethical fashion professionals",
    "D2C fashion brands creating designer-entrepreneur careers",
    "Fashion tech (3D design, AI styling, virtual retail) expanding",
    "Skills > Degree in hiring across brands, studios, production units",
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* About the Field */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a4e92] mb-4">
              About the Field
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The global fashion industry is a <span className="font-semibold">$2.5 trillion</span> sector
              encompassing design, manufacturing, retail, e-commerce, and sustainable
              fashion innovation. India is the world's second-largest textile producer and
              fashion's fastest-growing market.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <span className="font-semibold">IISD's Fashion School</span> transforms traditional tailoring into a
              structured program that integrates <span className="font-medium text-[#1a4e92]">
              design + production + business education</span> for a modern, global career path.
            </p>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1521336575822-6da63fb45455?q=80&w=800&auto=format&fit=crop"
              alt="Fashion design students"
              className="rounded-2xl shadow-lg w-full object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-[#1a4e92] text-white px-6 py-3 rounded-lg shadow-lg font-semibold">
              Fashion Innovation • Global Impact
            </div>
          </div>
        </div>

        {/* Industry Scope & Future */}
        <div className="bg-[#f9fafc] rounded-3xl shadow-sm p-8 md:p-10 border border-gray-100">
          <h3 className="text-2xl md:text-3xl font-bold text-[#1a4e92] mb-6">
            Industry Scope & Future
          </h3>

          <ul className="grid sm:grid-cols-2 gap-4 md:gap-5">
            {points.map((point, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-800 bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition"
              >
                <FaCheckCircle className="text-green-500 text-xl flex-shrink-0 mt-1" />
                <span className="text-[15px] leading-snug">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
