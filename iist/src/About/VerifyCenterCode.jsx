import React from "react";

export default function VerifyCenterCode() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      {/* Title */}
      <h1 className="text-3xl font-semibold text-gray-900 mb-8 text-center">
        Verify Your Center Code
      </h1>

      {/* Box with reduced width */}
      <div className="bg-[#003873] rounded-[30px] w-full max-w-md p-8 text-center">
        <form className="space-y-5">
          {/* Label */}
          <div className="text-left">
            <label
              htmlFor="centerID"
              className="block text-white text-lg mb-2 ml-1"
            >
              Center ID
            </label>
            <input
              type="text"
              id="centerID"
              placeholder="Enter Your Center ID"
              className="w-full bg-white rounded-full px-5 py-3 text-base placeholder-gray-500 focus:outline-none"
              required
            />
          </div>

          {/* Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#f15a24] hover:bg-[#d94f1f] text-white font-semibold text-lg rounded-full px-12 py-3 transition-colors"
            >
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
