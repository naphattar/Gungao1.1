import axios from "axios";
import { config } from "./Authconfig";
const API_URL : string = "http://localhost:4000/";

const register = (username : string, password : string) : any=> {
    return axios.post(API_URL + "user/register", {
      username,
      password,
    });
};

const login = (username : string , password : string) : any =>{
    return axios
    .post(API_URL + "user/login", {
      username,
      password,
    })
    .then((response) => {
      if(response.data.token){
        localStorage.setItem("jwt",response.data.token);
      }
    });
}
const getCurrentUser = () : any=>{
  return axios
  .get(API_URL + "current",config)
  .then((response) =>{
      return response.data;
  })
}

const logout = () =>{
  localStorage.removeItem("jwt");
}

  const AuthService = {
    register,
    login,
    getCurrentUser,
    logout
  }
  
  export default AuthService;