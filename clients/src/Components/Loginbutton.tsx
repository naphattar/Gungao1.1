import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "../Services/Authservices";

function Loginbutton(){
    const [isLogin,setIsLogin] = useState(false);
    return(
        
        <button className="loginbutton">
            <Link to="/login" className="loginlink">Login</Link>
        </button>
    );
}

export default Loginbutton;
