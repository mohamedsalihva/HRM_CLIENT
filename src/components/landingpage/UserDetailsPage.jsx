import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function UserDetailsPage() {
  const location = useLocation();
  const user = location.state.user;
  // const [isEditing, setIsEditing] = useState(false);
  // const [updatedUser, setUpdatedUser] = useState


  const handleEdit = (id) => {

  };

  const handleSave = async () => {
    const SERVER_URL = 'http://localhost:5000';

    try {
      const response = await axios.put(`${SERVER_URL}/UpdateUser`, updatedUser);

      console.log('User updated:', response.data);
      alert("User updated successfully");

      // setIsEditing(false);
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Updation failed');
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
                        VIEW USER
                      </p>
                      <form className="mx-1 mx-md-4">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="name"
                              className="form-control"
                              defaultValue={user.name}
                              name="name"
                          
                            />
                            <label className="form-label" htmlFor="form3Example1c">
                              Name
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="email"
                              className="form-control"
                              defaultValue={user.email}
                              name="email"
                          
                            />
                            <label className="form-label" htmlFor="form3Example3cEmail">
                              Email
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="address"
                              className="form-control"
                              defaultValue={user.address}
                              name="address"
                           
                            />
                            <label className="form-label" htmlFor="form3Example3cAddress">
                              Address
                            </label>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="password"
                              className="form-control"
                              defaultValue={user.password}
                              name="password"
                            
                            />
                            <label className="form-label" htmlFor="form3Example4c">
                              Password
                            </label>
                          </div>
                        </div>
                        <div className="text-center mt-4">
                       
                            <button className="btn btn-primary btn-lg" onClick={handleEdit}>Edit</button>
                          
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
}

export default UserDetailsPage;


{/* <h2>User Details</h2>
<p><strong>ID:</strong> {user._id}</p>
<p><strong>Name:</strong> {user.name}</p>
<p><strong>Email:</strong> {user.email}</p>
<p><strong>Password</strong>{user.password}</p>
<p><strong>Address:</strong> {user.address}</p> */}

