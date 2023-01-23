import React, { useEffect, useState } from 'react';
import AuthService from '../Services/Authservices';
import Loginbutton from './Loginbutton';
import "./Navbar.css"
import Navitem from './Navitem';
import { User } from '../Interface';
function Navbar() {
  const [isLogin,setIslogin] = useState(false);
  const [currentUser,setCurrentUser] = useState(null);
  useEffect(()=>{
    AuthService.getCurrentUser()
    .then((currentUser : any) =>{
      setCurrentUser(currentUser);
      setIslogin(true);
    })
    .catch((err : any) =>{
      console.log(err.response.data);
      setCurrentUser(null);
      setIslogin(false);
    })
  },[]);

  return (
    <nav className="navbar">
      <p className="navbrand">
        GUngao1.1
      </p>
      <ul className="navlist">
        <Navitem item={"Home"} tolink={"/"}></Navitem>
        <Navitem item={"How to use"} tolink={"/howtouse"}></Navitem>
        <Navitem item={"About us"} tolink={"/aboutus"}></Navitem>
      </ul>
      <Loginbutton islogin={isLogin}/>
    </nav>
  );
}

export default Navbar;
