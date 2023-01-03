import React from "react";
import { Link } from "react-router-dom";
import "./Mainpage.css"


function Selecttopicbutton(){
    return(
        <button className="selecttopicbutton">
            <Link to="/chat" className="selecttopiclink">Find Your Chatmate!</Link>
        </button>
    );
}

export default Selecttopicbutton;
