import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error,setError]=useState('')

  const handleLogin = async (e) => {
    e.preventDefault();
  
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
  
    const SERVER_URL = 'http://localhost:5000';
  
    try {
      const response = await axios.post(`${SERVER_URL}/login`, {
        email,
        password,
      });
  
      
      let responseData = await response.data;
      let token = responseData.data;
      console.log("token:", token);
      console.log("statuscode:",response.data.statusCode);
      console.log("message:",response.data.message)
      localStorage.setItem("token", token);
      setIsLoggedIn(true);
      
      alert('Login successful');
     
      // return { statusCode: 200, data: token, message: "Login success" };

  } catch (error) {
      console.log("Error:", error);
      alert('Login failed');
      return { statusCode: 404, message: "Something went wrong" };
  }
}


  if (isLoggedIn) {
    window.location.href = '/Landingpage';
  }


  return (
    <div>
      <section className="vh-100 mt-5">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3 text-dark">Sign in with</p>
                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-facebook-f" />
                </button>
                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-twitter" />
                </button>
                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <i className="fab fa-linkedin-in" />
                </button>
              </div>
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>
              {/* Email input */}
              <form onSubmit={handleLogin}>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Email address
                  </label>
                </div>
                {/* Password input */}
                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  {/* Checkbox */}
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      defaultValue=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <div href="#!" className="text-body">
                    Forgot password?
                  </div>
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-dark"
                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem' }}>
                    Login
                  </button>
                  <div className="small fw-bold mt-2 pt-1 mb-3">
                    Don't have an account?{' '}
                    <div href="#!" className="link-danger">
                      <Link to="/add-user">Signup</Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
          {/* Copyright */}
          <div className="text-white mb-3 mb-md-0 mt-3">Copyright © 2020. All rights reserved.</div>
          {/* Right */}
          <div>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-twitter" />
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-google" />
            </a>
            <a href="#!" className="text-white">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
          {/* Right */}
        </div>
      </section>
    </div>
  );
};

export default LoginPage;