import React, { useState, useEffect } from "react";

import logo from "../images/IISD.855d404de3a326ca6293.webp";

export default function Center_login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [studentData, setStudentData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setProgress(0);

    // Simulate progress bar
    let value = 0;
    const interval = setInterval(() => {
      value += 2;
      setProgress(value);
      if (value >= 100) clearInterval(interval);
    }, 100);

    // Simulate login delay
    setTimeout(() => {
      clearInterval(interval);
      setLoading(false);

      // Simulate login validation
      if (username.trim() && password.trim()) {
        setStudentData({
          name: "Center Admin",
          username: username,
          role: "Center",
          session: password,
        });
      } else {
        setError("Please enter Center Username and Password");
      }
    }, 2000); // 2 sec delay
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white px-4 relative">
      {loading && (
        <div className="absolute inset-0 bg-white/80 flex flex-col items-center justify-center z-50">
          <p className="text-lg font-semibold text-gray-800 mb-4">
            Logging in...
          </p>

          <div className="flex space-x-2 mb-6">
            <span className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"></span>
            <span className="w-3 h-3 bg-orange-500 rounded-full animate-bounce [animation-delay:200ms]"></span>
            <span className="w-3 h-3 bg-orange-500 rounded-full animate-bounce [animation-delay:400ms]"></span>
          </div>

          <div className="w-64 h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-orange-500 transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="mt-2 text-sm font-medium text-gray-700">{progress}%</p>
        </div>
      )}

      {!studentData ? (
        <div className="w-full max-w-md">
          <div className="text-center mb-6">
            <img src={logo} alt="IIST Logo" className="mx-auto w-24 h-24 mb-3" />
            <h1 className="text-lg font-bold text-gray-800">
              INDIAN INSTITUTE OF SKILL DEVELOPMENT
            </h1>
            <p className="text-gray-700 font-medium">भारतीय कौशल विकास संस्थान</p>
            <h2 className="text-xl font-bold text-black mt-2">Center Login</h2>
          </div>

          <form
            onSubmit={handleLogin}
            className="bg-[#002b6b] rounded-2xl p-6 shadow-lg"
          >
            {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

            <div className="mb-4">
              <label className="block text-white font-semibold mb-2">
                Center Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter Center Username"
                className="w-full bg-white px-4 py-2 rounded-full border border-gray-300 focus:outline-none text-gray-700 text-sm"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-white font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="w-full bg-white px-4 py-2 rounded-full border border-gray-300 focus:outline-none text-gray-700 text-sm"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full ${
                loading ? "bg-gray-400" : "bg-orange-500 hover:bg-orange-600"
              } text-white py-2 rounded-full font-semibold transition`}
            >
              {loading ? "Processing..." : "Login"}
            </button>
          </form>
        </div>
      ) : (
        <div className="text-center mt-6">
          <h2 className="text-xl font-bold text-gray-800">
            Welcome, {studentData.username}!
          </h2>
          <p className="text-gray-700 mt-2">You are logged in as a Center Admin</p>
        </div>
      )}
    </div>
  );
}
