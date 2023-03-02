import React, { ChangeEvent, useState } from "react";
import "./Loginpage.css"
import { useNavigate } from "react-router-dom";
import AuthService from "../../Services/Authservices";


function Registerpage(){
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState(null);
    const errorMessage = error ? error : "Welcome";
    const navigate = useNavigate()

    const handleSubmit = (e : any) => {
        e.preventDefault();
            AuthService.register(username,password)
            .then((response : any) =>{
                if(response.status === 201){
                    console.log("Register complete");
                    navigate("/login");
                    window.location.reload();
                }
            },(error : any) =>{
                console.log(error.response.data.message);
                setError(error.response.data.message);
            })
    }

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
                            <button onClick={handleSubmit} >Sign Up</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Registerpage; 