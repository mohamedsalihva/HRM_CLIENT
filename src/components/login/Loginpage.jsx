import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PopupMessage from '../popupmessage/PopupMessage';
import '../css/style.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const showSuccessPopup = (message) => {
    console.log('Showing success popup:', message);
    setPopupMessage(message);
    setPopupType('success');
    setShowPopup(true);
  };

  const handleOk = () => {
    setShowPopup(false);
    if (isLoggedIn) {
      window.location.href = '/Landingpage';
    }
  };

  const showErrorPopup = (message) => {
    console.log('Showing error popup:', message);
    setPopupMessage(message);
    setPopupType('error');
    setShowPopup(true);
  };

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
      localStorage.setItem('accessToken', token);
      setIsLoggedIn(true);
      showSuccessPopup('Login successful');
      console.log("login success");

    } catch (error) {
      console.log('Error:', error);
      showErrorPopup('Login failed');
      console.log("login failed");
      return { statusCode: 404, message: 'Something went wrong' };
    }
  };

  // if (isLoggedIn) {
  //   window.location.href = '/Landingpage';
  // }

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
                <p className="lead fw-normal mb-0 me-3 text-dark">login with</p>
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
                  <div className="text-body">
                    <Link to="/forgot-password">Forgot password?</Link>
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
                      {/* <Link to="/add-user">ADDUSER</Link> */}
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* PopupMessage component - Only render when isLoggedIn is true */}
      {showPopup && (
        <PopupMessage
          type={popupType}
          message={popupMessage}
          onOk={handleOk}
          onTryAgain={() => setShowPopup(false)} // Close popup on "Try Again"
        />
      )}
    </div>

  );
};

export default LoginPage;
