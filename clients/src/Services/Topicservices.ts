import axios from "axios";
const API_URL : string = "http://localhost:4000/topic/";

const register = (username : string, password : string) => {
    return axios.post(API_URL + "user/register", {
      username,
      password,
    });
};

const login = (username : string , password : string)=>{
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

const logout = () =>{
  localStorage.removeItem("jwt");
}

  const TopicService= {
    register,
    login,
    logout
  }
  
  export default TopicService;