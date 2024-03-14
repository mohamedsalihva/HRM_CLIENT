import React, { useEffect, useState } from 'react'
import axios from 'axios';

function UserDetailsPage() {

    const [data, setData] = useState([]);

  
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
                <td>PASSWORD</td>
               
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
        <input
          type="text"
          name="password"
          value={item.password}
          disabled={true}
        />
      </td>
      <td>
      </td>
    </tr>
  ))}
  
  
  
            </tbody>
          </table>
        </div>
      
  
      </div>
    );
  }
  
export default UserDetailsPage
