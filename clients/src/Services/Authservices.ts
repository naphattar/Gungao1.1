import axios from "axios";
const API_URL : string = "http://localhost:4000/";

const register = (username : string, password : string) : any=> {
    return axios.post(API_URL + "register", {
      username,
      password,
    });
};

const login = (username : string, password : string): any => {
    return axios
      .post(API_URL + "login", {
        username,
        password,
      })
      .then((response) => {
        if (response.data.username) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      });
  };
  
  const logout = () => {
      localStorage.removeItem("user")
  };
  
  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user") || "");
  };
  
  const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
  }
  
  export default AuthService;