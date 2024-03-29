import React, { useEffect, useState } from 'react';
import AuthService from '../Services/Authservices';
import Loginbutton from './Loginbutton';
import "./Navbar.css"
import Navitem from './Navitem';
import { User } from '../Types/User';
import iconimage from "./assets/brandicon.png";
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [isLogin,setIslogin] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    AuthService.getCurrentUser()
    .then((currentUser : User) =>{
      setIslogin(true);
    })
    .catch((err : any) =>{
      console.log(err.response.data);
      setIslogin(false);
    })
  },[]);
  return (
    <nav className="navbar">
      <div className="navbrand">
        <img src={iconimage} onClick={()=>{navigate("/")}}></img>
        <p onClick={()=>{navigate("/")}}>GUngao1.1</p>
      </div>
      <ul className="navlist">
        <Navitem item={"Home"} tolink={"/"}></Navitem>
        <Navitem item={"How to use"} tolink={"/howtouse"}></Navitem>
        <Navitem item={"Add Your Topic"} tolink={"/addtopic"}></Navitem>
      </ul>
      <Loginbutton islogin={isLogin}/>
    </nav>
  );
}

export default Navbar;
