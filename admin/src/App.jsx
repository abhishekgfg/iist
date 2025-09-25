import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Layout from "./components/Layout";
import ProgramUpload from "./pages/ProgramUpload";
import Courses from "./pages/Courses";
import AdminSkillProgram from "./pages/AdminSkillProgram";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default page is Login */}
        <Route path="/" element={<Login />} />

        {/* Common Dashboard inside Layout */}
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
      <Route
          path="/upload"
          element={
            <Layout>
              <AdminSkillProgram/>
            </Layout>
          }
        />

        {/* Catch all unknown routes */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
