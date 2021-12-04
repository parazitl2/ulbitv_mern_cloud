import axios from "axios";

export const registration = async (email, password) => {
  try {
    const response = await axios.post(`http://localhost:3011/api/auth/registration`, {
      email,
      password
    });
    alert(response.data.message);
  } catch (e) {
    alert(e.response.data.message);
  }
};

export const login = async (email, password) => {
  return async dispatch => {
    try {
      const response = await axios.post(`http://localhost:3011/api/auth/login`, {
        email,
        password
      });
      console.log(response.data);
    } catch (e) {
      alert(e.response.data.message);
    }
  }
};
