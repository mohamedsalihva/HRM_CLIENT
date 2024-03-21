import React, { useState } from 'react';
import axios from 'axios';

const AddUserPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [errors, setError] = useState('');

 
  // const validateEmail = (email) => {
  //   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  // };



  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleclick = async (e) => {
    e.preventDefault();

    // const newErrors = {};

    // if (!email) {

    //   newErrors.email = 'Email is required';
    // } else if (!validateEmail(email)) {
    //   newErrors.email = 'Invalid email format';
    // }
    
    
    if (!name || !email || !address || !password) {
      setError('All fields are required');
      return;
    }
  

    const SERVER_URL = 'http://localhost:5000';

    try {
      const response = await axios.post(`${SERVER_URL}/Adduser`, {
        name,
        email,
        address,
        password,
      });
      console.log("response:",response)

      if (response && response.status === 201) {
        alert("Form submitted successfully");
        console.log("Form submitted successfully");
        console.log("name:",name);
        console.log("emai:",email);
        console.log("password:",password);
        console.log("address:",address);
        setName('');
        setPassword('');
        setEmail('');
        setAddress('');
      } else {
        alert("Form submission failed");
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error during form submission:', error);
    }
  };

  return (
    <div>
      <section className="vh-70" style={{ backgroundColor: "#eee" }}>
        <div className="container h-60">
          <div className="row d-flex justify-content-center align-items-center h-100 ">
            <div className="col-lg-12 col-xl-11 ">
              <div className="card text-black" style={{ borderRadius: 25 }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        ADD USER
                      </p>
                      <form className="mx-1 mx-md-4" onSubmit={handleclick}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example1c">
                              Name
                            </label>
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              value={name}
                              onChange={handleNameChange}
                            />
                         
                          
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example3cEmail">
                              Email
                            </label>
                            <input
                              type="email"
                              id="form3Example3cEmail"
                              className="form-control"
                              value={email}
                              onChange={handleEmailChange}
                            />
                        {/* {errors.email && <p className='error-message'>{errors.email}</p>} */}
                        
                           
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example3cAddress">
                              Address
                            </label>
                            <input
                              type="text"
                              id="form3Example3cAddress"
                              className="form-control"
                              value={address}
                              onChange={handleAddressChange}
                            />
                           

                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example4c">
                              Password
                            </label>
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              value={password}
                              onChange={handlePasswordChange}
                            />
                          
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            defaultValue=""
                            id="form2Example3c"
                          />
                          <label className="form-check-label" htmlFor="form2Example3">
                            I agreee all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-primary btn-lg"
                          >
                            AddUser
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2 mb-5">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddUserPage;
