import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './components/landingpage/Landingpage';
import LoginPage from './components/landingpage/Loginpage';
import AddUserPage from './components/landingpage/Adduserpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import ViewListPage from './components/landingpage/ViewListPage';
import UserDetailsPage from './components/landingpage/UserDetailsPage';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Landingpage" element={<LandingPage />} />
        <Route path="/add-user" element={<AddUserPage />} />
        <Route exact path="/viewList" element={<ViewListPage/>} />
        <Route path="/user/:id" element={<UserDetailsPage/>} />
        {/* Add a catch-all route to redirect to LoginPage if route not found */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
