import React from "react";

export default function QualificationLevels() {
  const levels = [
    { level: "ISC Level 3", duration: "3 Months", title: "International Skill Certificate" },
    { level: "ISC Level 4", duration: "6 Months", title: "International Skill Diploma" },
    { level: "ISC Level 5", duration: "12 Months", title: "Advanced Skill Diploma" },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Qualification Levels
        </h2>

        <div className="overflow-x-auto">
          <table className="mx-auto w-3/4 bg-white rounded-lg shadow-md">
            <thead className="bg-[#1a4e92] text-white text-left">
              <tr>
                <th className="py-3 px-6 font-medium">Level</th>
                <th className="py-3 px-6 font-medium">Duration</th>
                <th className="py-3 px-6 font-medium">Qualification Title</th>
              </tr>
            </thead>
            <tbody>
              {levels.map((item, index) => (
                <tr key={index} className={`${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                  <td className="py-3 px-6 text-gray-900">{item.level}</td>
                  <td className="py-3 px-6 text-gray-900">{item.duration}</td>
                  <td className="py-3 px-6 text-gray-900">{item.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-gray-500 text-sm">
          ISC = International Skill Credential (IISD qualification standard)
        </p>
      </div>
    </section>
  );
}
