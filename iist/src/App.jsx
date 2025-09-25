import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home"; // Home component import
import StudentLogin from "./components/StudentLogin";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/Home" element={<Home />} /> {/* Home route */}
        <Route path="/" element={<StudentLogin/>} /> {/* Student Login route */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
