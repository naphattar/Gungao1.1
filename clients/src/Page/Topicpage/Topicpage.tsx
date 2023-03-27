import { useRef } from "react";
import { leftcontainer, rightcontainer, selectimage, topicpagebodyLarge, topicpagebodySmall } from "./styles";
import "./style.css";
import topicselecticon from "./assets/topicselecticon.png";
function Topicpage(){
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const windowWidth = windowSize.current[0];
    return(
        <div style={(windowWidth >= 992) ? topicpagebodyLarge : topicpagebodySmall}>
            <div style={leftcontainer}>
                <h1>เพียงเลือกหัวข้อที่สนใจ</h1>
            </div>

            <div style={rightcontainer}> 
                <span id="dot">
                    <img style={selectimage}src={topicselecticon}></img>
                </span>
                
            </div>
        </div>
    );
}

export default Topicpage;