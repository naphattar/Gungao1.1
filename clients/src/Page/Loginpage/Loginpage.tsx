import React, { useState ,useEffect} from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import AuthService from '../../Services/Authservices';
import "./Loginpage.css"

function Loginpage() {
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e : any) =>{
    e.preventDefault();
    AuthService.login(username,password)
    .then((response : any) =>{
        console.log("Login completed");
        navigate("/");
        window.location.reload();
    },(error : any) => {
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
        setError(error.response.data);
    });
    
  }
  const errorMessage = error ?  error  : "Don't have an account? ";
  return (
    <div className="loginpagebody">    
        <div className="loginformcontainer">
            <div className="signincontainer">
            <h1>Sign In</h1>
                <form className="signinform">
                    <input 
                    type="text" 
                    placeholder="Username" 
                    onChange = {(event) =>{setUsername(event.target.value)}}
                    ></input>
                    <input 
                    type="text" 
                    placeholder="Password" 
                    onChange = {(event) =>{setPassword(event.target.value)}}
                    ></input>
                    <a href='/register'> {errorMessage+" register here"}</a>
                    <button onClick={handleSubmit}>Log in </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default Loginpage;
