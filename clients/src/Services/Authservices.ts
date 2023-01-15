import axios from "axios";
import { config } from "./Authconfig";
const API_URL : string = "http://localhost:4000/";

const register = (username : string, password : string) : any=> {
    return axios.post(API_URL + "register", {
      username,
      password,
    });
};

const login = (username : string , password : string) : any =>{
    return axios
    .post(API_URL + "login", {
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
    if(response.data.username){
      localStorage.setItem("user",response.data.username);
    }
  })
}

const logout = () =>{
  localStorage.removeItem("jwt");
  localStorage.removeItem("user");
  
}

  const AuthService = {
    register,
    login,
    getCurrentUser,
    logout
  }
  
  export default AuthService;