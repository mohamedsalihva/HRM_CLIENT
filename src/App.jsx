

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './components/login/Loginpage';
import LandingPage from './components/landingpage/Landingpage';
import AddUserPage from './components/adduser/Adduserpage';
import ViewListPage from './components/veiwlist/ViewListPage';
import UserDetailsPage from './components/edit-delete/UserDetailsPage';
import ForgotPassword from './components/forgot-password/ForgotPassword';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/Landingpage" element={<LandingPage />} />
        <Route path="/add-user" element={<AddUserPage />} />
        <Route exact path="/viewList" element={<ViewListPage />} />
        <Route path="/user/:id" element={<UserDetailsPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

    </Router>
  );
};

export default App;
