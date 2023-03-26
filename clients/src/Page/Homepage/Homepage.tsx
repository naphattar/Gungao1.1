import React from 'react';
import backgroundimage from "./assets/Homepagebackground.jpg";
import "../Mainpage/Mainpage.css";

function Homepage() {

  const buttonScroll = () =>{
    const element = document.getElementById("Selectpage");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="homepagebody"  id="homepagebackground"
    style={{backgroundImage: `url(${backgroundimage})`}}
    >
      <div className="homepagetextcontainer">
        <p>เหงาปาก เหงาใจ ไร้เพื่อนคุย</p>
        <p>ให้เราหา "เพื่อนคุย" ให้กับคุณ</p>
        <button onClick={buttonScroll}>ค้นหาเพื่อนคุยเลย</button>
      </div>
    </div>
  );
}

export default Homepage;
