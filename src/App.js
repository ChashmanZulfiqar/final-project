import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import LearningSection from './components/LearningSection';
import ContactUsSection from './components/ContactUsSection';
import Footer from './components/Footer';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';

import './index.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <LearningSection />
                <ContactUsSection />
                <Footer />
              </>
            }
          />

          {/* Dashboard Route */}
          <Route path="/dashboard" element={<Dashboard />} />

          {/* Register Page Route */}
          <Route path="/register" element={<RegisterPage />} />

          {/* Login Page Route */}
          <Route path="/login" element={<LoginPage />} />

          {/* Contact Us Route */}
          <Route path="/contact" element={<ContactUsSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
