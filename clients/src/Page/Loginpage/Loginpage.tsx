import React, { useState } from 'react';
import "./Loginpage.css"

function Loginpage() {

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState(null);
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
                    <button>Log in </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default Loginpage;
