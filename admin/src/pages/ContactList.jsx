import React, { useEffect, useState } from "react";
import axios from "../api/axiosInstance";
import toast, { Toaster } from "react-hot-toast";

export default function ContactList() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const res = await axios.get("/contact");
      setContacts(res.data.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch contacts");
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this contact?");
    if (!confirmDelete) return;

    const loadingToast = toast.loading("Deleting...");

    try {
      await axios.delete(`/contact/${id}`);
      toast.dismiss(loadingToast);
      toast.success("Contact deleted successfully ✅");
      setContacts((prev) => prev.filter((c) => c._id !== id));
    } catch (err) {
      toast.dismiss(loadingToast);
      toast.error("Failed to delete contact ❌");
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* ✅ Toast moved to top-right */}
      <Toaster position="top-right" reverseOrder={false} />

      <h1 className="text-2xl font-bold mb-6 text-[#002b6b] text-center">
        All Contact Submissions
      </h1>

      <div className="overflow-x-auto bg-white shadow-lg rounded-lg">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-[#002b6b] text-white">
            <tr>
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Phone</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Message</th>
              <th className="py-3 px-4 text-left">Date</th>
              <th className="py-3 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
              <tr key={c._id} className="border-t hover:bg-gray-100 transition">
                <td className="py-2 px-4">{c.name}</td>
                <td className="py-2 px-4">{c.phone}</td>
                <td className="py-2 px-4">{c.email}</td>
                <td className="py-2 px-4">{c.message}</td>
                <td className="py-2 px-4">
                  {new Date(c.createdAt).toLocaleDateString()}
                </td>
                <td className="py-2 px-4 text-center">
                  <button
                    onClick={() => handleDelete(c._id)}
                    className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded-md transition-all"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {contacts.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-4 text-gray-500">
                  No contacts found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
