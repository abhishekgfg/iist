import React, { useState } from "react";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axiosInstance from "../api/axiosInstance";
import { Link } from "react-router-dom";

export default function StudentProgramUpload() {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");
  const [about, setAbout] = useState("");
  const [industryFields, setIndustryFields] = useState([""]);
  const [qualificationLevels, setQualificationLevels] = useState([
    { level: "", duration: "", title: "" },
  ]);
  const [programList, setProgramList] = useState([
    { program: "", level: "", duration: "" },
  ]);
  const [brochures, setBrochures] = useState([]);

  // === Handlers ===
  const handleIndustryChange = (index, value) => {
    const updated = [...industryFields];
    updated[index] = value;
    setIndustryFields(updated);
  };

  const addIndustryField = () => setIndustryFields([...industryFields, ""]);

  const handleQualificationChange = (index, field, value) => {
    const updated = [...qualificationLevels];
    updated[index][field] = value;
    setQualificationLevels(updated);
  };

  const addQualificationField = () =>
    setQualificationLevels([
      ...qualificationLevels,
      { level: "", duration: "", title: "" },
    ]);

  const handleProgramChange = (index, field, value) => {
    const updated = [...programList];
    updated[index][field] = value;
    setProgramList(updated);
  };

  const addProgramField = () =>
    setProgramList([...programList, { program: "", level: "", duration: "" }]);

  // === Submit Handler ===
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("title", title);
      formData.append("about", about);
      formData.append("industryFields", JSON.stringify(industryFields));
      formData.append(
        "qualificationLevels",
        JSON.stringify(qualificationLevels)
      );
      formData.append("programList", JSON.stringify(programList));
      brochures.forEach((b) => formData.append("brochures", b));

      const res = await axiosInstance.post("/student-programs", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("✅ Student Program saved successfully!");
      console.log("Server response:", res.data);

      // Reset form
      setImage(null);
      setTitle("");
      setAbout("");
      setIndustryFields([""]);
      setQualificationLevels([{ level: "", duration: "", title: "" }]);
      setProgramList([{ program: "", level: "", duration: "" }]);
      setBrochures([]);
    } catch (error) {
      console.error("❌ Upload failed:", error);
      alert("Upload failed. Check console for details.");
    }
  };

  return (
    <section className="max-w-6xl mx-auto p-8 bg-white shadow-xl rounded-2xl mt-10 border border-gray-200 relative">
      {/* 🔹 Header Section with Button */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-[#1a4e92]">
          Student Program Upload
        </h1>
        <Link
          to="/school-program-list"
          className="bg-[#1a4e92] hover:bg-[#163d75] text-white px-6 py-2 rounded-lg font-semibold shadow-md transition"
        >
          View Programs
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Upload Image */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="w-full border rounded-xl px-4 py-2 file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-white file:bg-[#1a4e92] hover:file:bg-[#163d75]"
          />
        </div>

        {/* Title */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
            className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-[#1a4e92] outline-none"
            required
          />
        </div>

        {/* About */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">About</label>
          <SimpleMDE
            value={about}
            onChange={setAbout}
            options={{
              spellChecker: false,
              placeholder: "Write about the program...",
              status: false,
              toolbar: [
                "bold",
                "italic",
                "heading",
                "|",
                "quote",
                "unordered-list",
                "ordered-list",
                "|",
                "link",
                "image",
                "|",
                "preview",
                "side-by-side",
                "fullscreen",
              ],
            }}
          />
        </div>

        {/* Industry Scope */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Industry Scope & Future
          </label>
          {industryFields.map((field, index) => (
            <div key={index} className="flex gap-3 mb-3">
              <input
                type="text"
                value={field}
                onChange={(e) => handleIndustryChange(index, e.target.value)}
                placeholder={`Enter point ${index + 1}`}
                className="w-full border rounded-xl px-4 py-2 focus:ring-2 focus:ring-[#1a4e92] outline-none"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addIndustryField}
            className="bg-[#1a4e92] text-white px-4 py-2 rounded-lg hover:bg-[#163d75]"
          >
            + Add More
          </button>
        </div>

        {/* Qualification Levels */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Qualification Levels
          </label>
          {qualificationLevels.map((q, index) => (
            <div key={index} className="grid grid-cols-3 gap-4 mb-3">
              <input
                type="text"
                value={q.level}
                onChange={(e) =>
                  handleQualificationChange(index, "level", e.target.value)
                }
                placeholder="Level"
                className="border rounded-xl px-4 py-2 focus:ring-2 focus:ring-[#1a4e92] outline-none"
              />
              <input
                type="text"
                value={q.duration}
                onChange={(e) =>
                  handleQualificationChange(index, "duration", e.target.value)
                }
                placeholder="Duration"
                className="border rounded-xl px-4 py-2 focus:ring-2 focus:ring-[#1a4e92] outline-none"
              />
              <input
                type="text"
                value={q.title}
                onChange={(e) =>
                  handleQualificationChange(index, "title", e.target.value)
                }
                placeholder="Title"
                className="border rounded-xl px-4 py-2 focus:ring-2 focus:ring-[#1a4e92] outline-none"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addQualificationField}
            className="bg-[#1a4e92] text-white px-4 py-2 rounded-lg hover:bg-[#163d75]"
          >
            + Add More
          </button>
        </div>

        {/* Program List */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Program List
          </label>
          {programList.map((p, index) => (
            <div key={index} className="grid grid-cols-3 gap-4 mb-3">
              <input
                type="text"
                value={p.program}
                onChange={(e) =>
                  handleProgramChange(index, "program", e.target.value)
                }
                placeholder="Program"
                className="border rounded-xl px-4 py-2 focus:ring-2 focus:ring-[#1a4e92] outline-none"
              />
              <input
                type="text"
                value={p.level}
                onChange={(e) =>
                  handleProgramChange(index, "level", e.target.value)
                }
                placeholder="Level"
                className="border rounded-xl px-4 py-2 focus:ring-2 focus:ring-[#1a4e92] outline-none"
              />
              <input
                type="text"
                value={p.duration}
                onChange={(e) =>
                  handleProgramChange(index, "duration", e.target.value)
                }
                placeholder="Duration"
                className="border rounded-xl px-4 py-2 focus:ring-2 focus:ring-[#1a4e92] outline-none"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={addProgramField}
            className="bg-[#1a4e92] text-white px-4 py-2 rounded-lg hover:bg-[#163d75]"
          >
            + Add More
          </button>
        </div>

        {/* Upload Brochures */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Upload Brochures
          </label>
          <input
            type="file"
            multiple
            accept=".pdf,.doc,.docx"
            onChange={(e) => setBrochures(Array.from(e.target.files))}
            className="w-full border rounded-xl px-4 py-2 file:mr-3 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-white file:bg-[#1a4e92] hover:file:bg-[#163d75]"
          />
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#1a4e92] hover:bg-[#163d75] text-white font-semibold px-8 py-3 rounded-xl shadow-md transition"
          >
            Save All Details
          </button>
        </div>
      </form>
    </section>
  );
}
