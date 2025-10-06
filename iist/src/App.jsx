import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home"; // Home component import
import StudentLogin from "./components/StudentLogin";
import InspirationSection from "./Home/InspirationSection"; // InspirationSection component import
import SkillDevelopmentPage from "./About/SkillDevelopmentPage";
import VerifyCenterCode from "./About/VerifyCenterCode";
import SkillDevelopmentPrograms from "./Home/SkillDevelopmentPrograms";
import Center_login from "./Institute_Zone/Center_login";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/results" element={<StudentLogin/>} /> {/* Student Login route */}
        <Route path="/inspiration" element={<InspirationSection />} /> 
        <Route path="/skill-development" element={<SkillDevelopmentPage/>} /> {/* Fallback route */}
        <Route path="/affiliations" element={<VerifyCenterCode />} /> {/* Fallback route */}
        <Route path="/skilldevelopmentprogram" element={<SkillDevelopmentPrograms />} /> {/* Fallback route */}
        <Route path="/center-login" element={<Center_login />} /> {/* Fallback route */}

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
