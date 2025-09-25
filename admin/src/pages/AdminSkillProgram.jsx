import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminSkillProgram = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState(null);
  const [programs, setPrograms] = useState([]);
  const [message, setMessage] = useState("");

  // Fetch existing programs
  const fetchPrograms = async () => {
    try {
      const res = await axios.get("/api/skill-programs"); // make sure route matches backend
      setPrograms(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPrograms();
  }, []);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !image) {
      setMessage("Title and image are required");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);

    try {
      const res = await axios.post("/api/skill-programs/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMessage(res.data.message);
      setTitle("");
      setImage(null);
      fetchPrograms();
    } catch (err) {
      console.error(err);
      setMessage("Error adding program");
    }
  };

  return (
    <div className="admin-container" style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>Skill Development Programs Admin</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          type="text"
          placeholder="Program Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />
        <button type="submit">Add Program</button>
      </form>

      <h3 style={{ marginTop: "30px" }}>Existing Programs</h3>
      <ul>
        {programs.map((p) => (
          <li key={p._id} style={{ marginBottom: "10px" }}>
            <strong>{p.title}</strong>
            <br />
            <img
              src={`/uploads/${p.image}`}
              alt={p.title}
              style={{ width: "150px", marginTop: "5px", borderRadius: "5px" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminSkillProgram;
