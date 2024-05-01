import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function ViewListPage() {
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(3); 
  const navigate = useNavigate();

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = async (page) => {
    try {
      const response = await axios.get(`http://localhost:5000/users?page=${page}&pageSize=${pageSize}`);
      if (response.data && response.data.success) {
        setData(response.data.data.users);
        setTotalPages(response.data.data.totalPages);
        setCurrentPage(response.data.data.currentPage);
      } else {
        console.error('Invalid API response:', response);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleView = (item) => {
    navigate(`/user/${item.id}`, { state: { user: item } });
  };

  const handlePageChange = (page) => {
    
    if (page < 1) {
      page = 1;
    } else if (page > totalPages) {
      page = totalPages;
    }
    setCurrentPage(page);
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
      <div>
       
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        <span> Page {currentPage} of {totalPages} </span>
     
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
}

export default ViewListPage;

