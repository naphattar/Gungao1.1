import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundimage from "./assets/Homepagebackground.jpg";
import "./Mainpage.css"
function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="homepagebody"  id="homepagebackground"
    style={{backgroundImage: `url(${backgroundimage})`}}
    >
      <div className="homepagetextcontainer">
        <p>เหงาปาก เหงาใจ ไร้เพื่อนคุย</p>
        <p>ให้เราหา "เพื่อนคุย" ให้กับคุณ</p>
        <button onClick={()=> {navigate("/register")}}>เข้าร่วมกับเรา</button>
      </div>
    </div>
  );
}

export default Homepage;
