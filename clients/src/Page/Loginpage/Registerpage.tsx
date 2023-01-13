import React, { useState } from "react";
import "./Loginpage.css"
import { useNavigate } from "react-router-dom";


function Registerpage(){
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState(null);
    const errorMessage = error ? error : "Welcome";
    const navigate = useNavigate()

    return(
        <div>
             <div className="loginpagebody">
                <div className="loginformcontainer">
                    
                    <div className="signupcontainer">
                    <h1>Sign Up</h1>
                        <form className="signinform">
                            <input 
                            type="text" 
                            placeholder="Username" 
                            onChange = {(event) =>{setUsername(event.target.value)}}></input>
                            <input 
                            type="text" 
                            placeholder="Password" 
                            onChange = {(event) =>{setPassword(event.target.value)}}></input>
                            <a href='/register'>{errorMessage}</a>
                            <button >Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Registerpage; 