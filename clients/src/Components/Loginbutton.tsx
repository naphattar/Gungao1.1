import React from "react";
import { Link } from "react-router-dom";

interface islogin{
    islogin : boolean;
}

function Loginbutton(isLogin : islogin){
    return(
        /*
        isLogin ?
        <button className="loginbutton">
            <Link to="/" className="loginlink">Log-out</Link>
        </button>
        :*/
        <button className="loginbutton">
            <Link to="/login" className="loginlink">Login</Link>
        </button>
    );
}

export default Loginbutton;
