import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../Services/Authservices";

interface Loginbuttonprops{
    islogin: boolean;
}

function Loginbutton(Islogin : Loginbuttonprops){
    const navigate = useNavigate();
    const handlelogout = () =>{
        AuthService.logout();
        navigate("/");
        window.location.reload();
    }
    return(
        (Islogin.islogin) ? 
        <button className="loginbutton">
            <Link to="/" className="loginlink" onClick={handlelogout}>Logout</Link>
        </button>
        :
        <button className="loginbutton">
            <Link to="/login" className="loginlink">Login</Link>
        </button>
    );
}

export default Loginbutton;
