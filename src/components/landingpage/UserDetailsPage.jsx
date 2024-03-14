import React, { useState } from 'react'


function UserDetailsPage() {
    const [selectedUser, setSelectedUser] = useState(null);
  return (
    <div>
         {selectedUser && (
        <div className="user-details">
          <h2>User Details</h2>
          <p><strong>ID:</strong> {selectedUser.id}</p>
          <p><strong>Name:</strong> {selectedUser.name}</p>
          <p><strong>Email:</strong> {selectedUser.email}</p>
          <p><strong>Address:</strong> {selectedUser.address}</p>
          <button onClick={handleCloseDetails}>Close</button>
        </div>
      )} 
    </div>
  )
}

export default UserDetailsPage
