import React, { useState } from "react";
import axios from 'axios'; 

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');



  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    const HOSTED_SERVER_URL = 'http://localhost:5000'; 

    try {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token');

      const response = await axios.patch(
        `${HOSTED_SERVER_URL}/reset-password`,
        {
          password,
          confirmPassword // Changed to match backend variable name
        },

        {
          headers: {
            'Authorization': `Bearer ${token}` // Changed to 'Authorization' with capital 'A'
          }
        }
      );

      if (response.status === 200) { // Check response status instead of response.data.statusCode
        alert('Password successfully changed!');
        setPassword(''); 
        setConfirmPassword(''); 
        console.log("password:",password);
        console.log("confirmPassword:",confirmPassword);
      } else {
        console.error('Password change failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="reset-password-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleResetPassword} className="reset-password-form">
        <label>New Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {message && <p className="error-message">{message}</p>}
    </div>
  );
}

export default ResetPassword;
