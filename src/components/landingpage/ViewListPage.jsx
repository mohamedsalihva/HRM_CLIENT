import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function ViewListPage() {
  const [data, setData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/getuser');
        console.log("Response:", response.data);
        setData(response.data.data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };


    fetchData();
  }, []);


  const handleview = (item) => {
    setSelectedUser(item);
  };


  const handleCloseDetails = () => {
    setSelectedUser(null);
  };

 
  if (!Array.isArray(data)) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <div className='container'>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>NAME</td>
              <td>EMAIL</td>
              <td>ADDRESS</td>
            </tr>
          </thead>
          <tbody>

          {data.map((item, index) => (
  <tr key={index}>
    <td>
      <input
        type="text"
        name="id"
        value={item._id}
        disabled={true}
      />
    </td>
    <td>
      <input
        type="text"
        name="name"
        value={item.name}
        disabled={true}
      />
    </td>
    <td>
      <input
        type="text"
        name="email"
        value={item.email}
        disabled={true}
      />
    </td>
    <td>
      <input
        type="text"
        name="address"
        value={item.address}
        disabled={true}
      />
    </td>
    <td>
    <button onClick={()=> handleview(item)}>view</button>
    
    </td>
  </tr>
))}



          </tbody>
        </table>
      </div>
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

    </div>
  );
}

export default ViewListPage;
