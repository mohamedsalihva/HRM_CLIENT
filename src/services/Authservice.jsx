import axios from 'axios';


const login = async (email, password) => {
    try {
      const response = await axios.post('/login', { email, password });
      return response.data.token;
    } catch (error) {
      throw new Error(error.response.data.message || 'Login failed');
    }
  };
  
  export default {
    login
  };