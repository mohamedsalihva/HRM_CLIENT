import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/landingpage/Landingpage';
import LoginPage from './components/landingpage/Loginpage';
import AddUserPage from './components/landingpage/Adduserpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/landingpage/Footer';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Landingpage" element={<LandingPage />} />
        <Route path="/add-user" element={<AddUserPage />} />
        {/* Add a catch-all route to redirect to LoginPage if route not found */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
