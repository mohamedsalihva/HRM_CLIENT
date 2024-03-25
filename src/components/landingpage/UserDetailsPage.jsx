import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function UserDetailsPage() {
  const location = useLocation();
  const user = location.state.user;
  const [name, setName] = useState(user.name || '');
  const [email, setEmail] = useState(user.email || '');
  const [address, setAddress] = useState(user.address || '');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  
  const handleEdit = async (e) => {
    e.preventDefault();
    const SERVER_URL = 'http://localhost:5000';

    try {
      const response = await axios.put(`${SERVER_URL}/users`, {
        id: user._id, 
        name,
        email,
        address,
        
      });
      
      console.log("response:",response);
      console.log("name:",name)
      console.log("email:",email);
      console.log("address:",address);
     

      alert("User details updated successfullyy.");
    } catch (error) {
      console.error('Error updating user:', error);
      alert('Updation failed');
    }
  };


  const  handleDelete =async(e)=>{
 e.preventDefault();

 const SERVER_URL='http://localhost:5000';

      try {
       const response = await axios.delete(`${SERVER_URL}/users`,{
        data: { id: user.id }, 
       });
       console.log("id:", user._id);
       console.log("response:",response);

       alert("user deleted succesfully");

      } catch (error) {
        console.error('Error updating user:', error);
        alert('deletion failed')
      }
  }

  

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
                      <form className="mx-1 mx-md-4" onSubmit={handleEdit}>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="name"
                              className="form-control"
                              value={name}
                              onChange={handleNameChange}
                            />
                            <label className="form-label" htmlFor="name">
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
                              value={email}
                              onChange={handleEmailChange}
                            />
                            <label className="form-label" htmlFor="email">
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
                              value={address}
                              onChange={handleAddressChange}
                            />
                            <label className="form-label" htmlFor="address">
                              Address
                            </label>
                          </div>
                        </div>
                      
                        <div className="text-center mt-4">
                          <button type="submit" className="btn btn-primary btn-lg">
                            Save
                          </button>
                          <button type='submit' className="btn btn-danger btn-lg ms-3 " onClick={handleDelete} >Delete</button>
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

