import React, { useState } from "react";

const sampleStudent = {
  username: "student123",
  password: "password123",
  result: {
    course: "Diploma in Mechanical Engineering",
    name: "MD SAFROZ AHMAD",
    rollNo: "10054",
    enrollmentNo: "Jul.2006/01/10021",
    fatherName: "MD MOULADIN",
    srNo: "10113",
    session: "2007",
    subjects: [
      { sno: 1, name: "Theory", full: 150, pass: 90, obtained: 102 },
      { sno: 2, name: "Practical", full: 150, pass: 90, obtained: 117 },
      { sno: 3, name: "Drawing", full: 100, pass: 60, obtained: 74 },
      { sno: 4, name: "Safety", full: 100, pass: 60, obtained: 72 },
    ],
    totalFull: 500,
    totalPass: 300,
    totalObt: 365,
    remarks: "New Delhi",
    percentage: "73%",
    grade: "A",
    status: "PASS",
  },
};

export default function StudentLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (
      username === sampleStudent.username &&
      password === sampleStudent.password
    ) {
      setLoggedIn(true);
      setError("");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {!loggedIn ? (
        <div className="flex justify-center items-center ">
          <form
            onSubmit={handleLogin}
            className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
          >
            <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
              Student Login
            </h2>
            {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

            <div className="mb-4">
              <label className="block font-semibold mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block font-semibold mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 px-3 py-2 rounded"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800 transition"
            >
              Login
            </button>
          </form>
        </div>
      ) : (
        <div className="flex justify-center mt-10">
          <div className="bg-white border border-black w-full max-w-3xl">
            {/* Top Blue Header */}
            <div className="bg-blue-600 text-white text-center py-2">
              <h2 className="font-bold text-lg">ONLINE RESULT</h2>
              <p className="text-xs">
                range of programs and research opportunities across multiple campuses.
              </p>
            </div>

            <div className="p-6">
              {/* Course Heading */}
              <h3 className="text-center font-semibold text-lg mb-6">
                {sampleStudent.result.course}-SEMESTER
              </h3>

              {/* Student Details */}
              <div className="grid grid-cols-2 gap-y-2 mb-6 text-sm">
                <p><strong>Name:</strong> {sampleStudent.result.name}</p>
                <p><strong>Roll No:</strong> {sampleStudent.result.rollNo}</p>
                <p><strong>Father's Name:</strong> {sampleStudent.result.fatherName}</p>
                <p><strong>Enrollment No:</strong> {sampleStudent.result.enrollmentNo}</p>
                <p><strong>Sr. No:</strong> {sampleStudent.result.srNo}</p>
                <p><strong>Session:</strong> {sampleStudent.result.session}</p>
              </div>

              {/* Subjects Table */}
              <table className="w-full border-collapse text-sm mb-6">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border px-2 py-1">S. No.</th>
                    <th className="border px-2 py-1">Subject</th>
                    <th className="border px-2 py-1">Full Marks</th>
                    <th className="border px-2 py-1">Passing Marks</th>
                    <th className="border px-2 py-1">Marks Obtained</th>
                  </tr>
                </thead>
                <tbody>
                  {sampleStudent.result.subjects.map((s, i) => (
                    <tr key={i}>
                      <td className="border px-2 py-1 text-center">{s.sno}</td>
                      <td className="border px-2 py-1">{s.name}</td>
                      <td className="border px-2 py-1 text-center">{s.full}</td>
                      <td className="border px-2 py-1 text-center">{s.pass}</td>
                      <td className="border px-2 py-1 text-center">{s.obtained}</td>
                    </tr>
                  ))}
                  <tr className="font-bold bg-gray-50">
                    <td className="border px-2 py-1 text-center" colSpan={2}>
                      Total
                    </td>
                    <td className="border px-2 py-1 text-center">{sampleStudent.result.totalFull}</td>
                    <td className="border px-2 py-1 text-center">{sampleStudent.result.totalPass}</td>
                    <td className="border px-2 py-1 text-center">{sampleStudent.result.totalObt}</td>
                  </tr>
                </tbody>
              </table>

              {/* Result Box */}
           <div className="flex justify-end gap-4 mb-6">
  <div className="bg-red-100 text-red-600 px-6 py-2 rounded font-semibold">
    RESULT
  </div>
  <div className="bg-blue-600 text-white px-6 py-2 rounded font-semibold">
    {sampleStudent.result.status}
  </div>
</div>

               {/* Remarks */}
              <div className="flex justify-between text-sm font-semibold mb-6">
                <p>Place: {sampleStudent.result.remarks}</p>
                <p>Remarks: {sampleStudent.result.percentage}</p>
                <p>Result: {sampleStudent.result.status}</p>
                <p>Grade: {sampleStudent.result.grade}</p>
              </div>

              {/* Notes Section */}
              <div className="text-xs text-gray-600 space-y-2">
                <p>
                  B: 50% and above but below 60%, C: 40% and above but below 50%, 
                  D: Below 40%, A++: 85% AND ABOVE, A+: 75% and above but below 85%, 
                  A: 60% and above but below 75%
                </p>
                <p>
                  Note: Delhi University will not be held accountable for any errors in the marks, 
                  even though they are submitted following verification. 
                  The Delhi University original grade report will be the final one.
                </p>
                <p>
                  NOTE: For immediate assistance, please email us at{" "}
                  <a href="mailto:digital@dgu.ac.in" className="text-blue-900 underline">
                    digital@dgu.ac.in
                  </a>{" "}
                  OR{" "}
                  <a href="mailto:dguniversityofficial@gmail.com" className="text-blue-900 underline">
                    dguniversityofficial@gmail.com
                  </a>{" "}
                  if you are having any problems.
                </p>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
