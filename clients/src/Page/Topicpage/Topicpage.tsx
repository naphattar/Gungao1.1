import React, { useRef } from "react";
import { textcontainer, textstyleLarge, textstyleSmall, topicpagebodyLarge, topicpagebodySmall, topicscontainerLarge, topicscontainerSmall } from "./styles";
import Topicpresent from "./components/Topicpresent";
import mountainImage from "./components/assets/mountain.jpg";
import dinosaurImage from "./components/assets/dinosaur.jpg";
import foodImage from "./components/assets/food.jpg";

function Topicpage(){
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const windowWidth = windowSize.current[0];
    return(
        <div style={(windowWidth >= 992) ? topicpagebodyLarge : topicpagebodySmall}>
            <div style={textcontainer}>
                <h2  style={windowWidth >= 992 ? textstyleLarge : textstyleSmall}>เลือกหัวข้อที่น่าสนใจ</h2>
                <h1 style={windowWidth >= 992 ? textstyleLarge : textstyleSmall}>เเล้วมองหาคนที่สนใจเหมือนคุณเลย</h1>
            </div>
            <div style={windowWidth >= 992 ? topicscontainerLarge : topicscontainerSmall}>
                <Topicpresent 
                imageurl={mountainImage}
                topic="การท่องเที่ยว"
                roomid={10}
                />
                <Topicpresent 
                imageurl={dinosaurImage}
                topic="ไดโนเสาร์"
                roomid={4}
                />
                <Topicpresent 
                imageurl={foodImage}
                topic="อาหาร"
                roomid={11}
                />
                <Topicpresent 
                imageurl={mountainImage}
                topic="การท่องเที่ยว"
                roomid={10}
                />
                <Topicpresent 
                imageurl={dinosaurImage}
                topic="ไดโนเสาร์"
                roomid={4}
                />
                <Topicpresent 
                imageurl={foodImage}
                topic="อาหาร"
                roomid={11}
                />
                <Topicpresent 
                imageurl={mountainImage}
                topic="การท่องเที่ยว"
                roomid={10}
                />
                <Topicpresent 
                imageurl={dinosaurImage}
                topic="ไดโนเสาร์"
                roomid={4}
                />
                <Topicpresent 
                imageurl={foodImage}
                topic="อาหาร"
                roomid={11}
                />
                <Topicpresent 
                imageurl={mountainImage}
                topic="การท่องเที่ยว"
                roomid={10}
                />
                <Topicpresent 
                imageurl={dinosaurImage}
                topic="ไดโนเสาร์"
                roomid={4}
                />
                <Topicpresent 
                imageurl={foodImage}
                topic="อาหาร"
                roomid={11}
                />
            </div>
        </div>
    );
}

export default Topicpage;