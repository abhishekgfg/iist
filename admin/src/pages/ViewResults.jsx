import React, { useEffect, useState } from "react";
import axios from "../api/axiosInstance";
import UpdateResultModal from "../components/UpdateResultModal";

export default function ViewResults() {
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchResults = async () => {
    try {
      const res = await axios.get("/students/all");
      setResults(res.data);
      setFilteredResults(res.data);
    } catch (error) {
      console.error("Error fetching results:", error);
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);

  // Dynamic search function
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (!query) {
      setFilteredResults(results);
      return;
    }
    const lowerQuery = query.toLowerCase();
    const filtered = results.filter((student) => {
      const { result, username } = student;
      return (
        result.name.toLowerCase().includes(lowerQuery) ||
        result.rollNo.toLowerCase().includes(lowerQuery) ||
        result.enrollmentNo.toLowerCase().includes(lowerQuery) ||
        result.fatherName.toLowerCase().includes(lowerQuery) ||
        result.course.toLowerCase().includes(lowerQuery) ||
        result.session.toLowerCase().includes(lowerQuery) ||
        result.status.toLowerCase().includes(lowerQuery) ||
        username.toLowerCase().includes(lowerQuery) ||
        result.subjects.some((sub) => sub.name.toLowerCase().includes(lowerQuery))
      );
    });
    setFilteredResults(filtered);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this result?")) return;
    try {
      await axios.delete(`/students/delete/${id}`);
      fetchResults();
    } catch (err) {
      console.error("Failed to delete:", err);
    }
  };

  const openUpdateModal = (student) => {
    setSelectedStudent(student);
    setIsModalOpen(true);
  };

  const handleSaveUpdate = async (id, updatedData) => {
    try {
      await axios.put(`/students/update/${id}`, { result: updatedData });
      fetchResults();
    } catch (err) {
      console.error("Failed to update:", err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <h2 className="text-2xl font-bold text-indigo-800 mb-6 text-center">
        All Student Results
      </h2>

      {/* Search Bar */}
      <div className="w-full max-w-6xl mb-6">
        <input
          type="text"
          placeholder="Search by any field..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          className="w-full p-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      {filteredResults.map((student) => (
        <div
          key={student._id}
          className="w-full max-w-6xl bg-white rounded-xl shadow-lg p-6 mb-6"
        >
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2 mb-4 text-sm">
            <p><strong>Name:</strong> {student.result.name}</p>
            <p><strong>Roll No:</strong> {student.result.rollNo}</p>
            <p><strong>Enrollment No:</strong> {student.result.enrollmentNo}</p>
            <p><strong>Father's Name:</strong> {student.result.fatherName}</p>
            <p><strong>Course:</strong> {student.result.course}</p>
            <p><strong>Session:</strong> {student.result.session}</p>
            <p><strong>Percentage:</strong> {student.result.percentage}</p>
            <p><strong>Grade:</strong> {student.result.grade}</p>
            <p><strong>Status:</strong> {student.result.status}</p>
          </div>

          {/* Subjects Table */}
          <div className="overflow-x-auto mb-4">
            <table className="w-full border rounded-lg text-sm">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border px-2 py-1">S.No</th>
                  <th className="border px-2 py-1">Subject</th>
                  <th className="border px-2 py-1">Full Marks</th>
                  <th className="border px-2 py-1">Passing Marks</th>
                  <th className="border px-2 py-1">Marks Obtained</th>
                </tr>
              </thead>
              <tbody>
                {student.result.subjects.map((sub) => (
                  <tr key={sub.sno} className="hover:bg-gray-50">
                    <td className="border px-2 py-1 text-center">{sub.sno}</td>
                    <td className="border px-2 py-1">{sub.name}</td>
                    <td className="border px-2 py-1 text-center">{sub.full}</td>
                    <td className="border px-2 py-1 text-center">{sub.pass}</td>
                    <td className="border px-2 py-1 text-center">{sub.obtained}</td>
                  </tr>
                ))}
                <tr className="font-bold bg-gray-50">
                  <td colSpan={2} className="border px-2 py-1 text-center">Total</td>
                  <td className="border px-2 py-1 text-center">{student.result.totalFull}</td>
                  <td className="border px-2 py-1 text-center">{student.result.totalPass}</td>
                  <td className="border px-2 py-1 text-center">{student.result.totalObt}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Actions */}
          <div className="flex gap-2 justify-end">
            <button
              onClick={() => openUpdateModal(student)}
              className="bg-yellow-400 px-3 py-1 rounded text-white text-sm"
            >
              Update
            </button>
            <button
              onClick={() => handleDelete(student._id)}
              className="bg-red-500 px-3 py-1 rounded text-white text-sm"
            >
              Delete
            </button>
          </div>

          {/* Note & Login Info */}
          <div className="flex gap-4 text-sm text-gray-600 mt-2">
            <p><strong>Note:</strong> Only use for result check</p>
            <p><strong>Username:</strong> {student.username}</p>
            <p><strong>Session (Password):</strong> {student.result.session}</p>
          </div>
        </div>
      ))}

      {selectedStudent && (
        <UpdateResultModal
          student={selectedStudent}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveUpdate}
        />
      )}
    </div>
  );
}
