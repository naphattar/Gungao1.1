import axios from "axios";
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
      console.log(response);
      /*
      if (response.data.username) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }*/
      return response.data;
    });
}
const getCurrentUser = () =>{
    
}

  const AuthService = {
    register,
    login,
    getCurrentUser,
  }
  
  export default AuthService;