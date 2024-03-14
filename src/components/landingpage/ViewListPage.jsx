import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function ViewListPage() {
  
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/getuser');
        setData(response.data.data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleView = (item) => {
    navigate(`/user/${item.id}`, { state: { user: item } });
  };

  return (
    <div className='container'>
      <h1>User List</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.address}</td>
              <td>
                <button onClick={() => handleView(item)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewListPage;


{/* {selectedUser && (
  <div className="user-details">
    <h2>User Details</h2>
    <p><strong>ID:</strong> {selectedUser.id}</p>
    <p><strong>Name:</strong> {selectedUser.name}</p>
    <p><strong>Email:</strong> {selectedUser.email}</p>
    <p><strong>Address:</strong> {selectedUser.address}</p>
    <button onClick={handleCloseDetails}>Close</button>
  </div>
)} */}