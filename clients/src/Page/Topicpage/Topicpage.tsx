import { useRef } from "react";
import { Topicimagecontainer, TopicpagebodyLarge, Topicpagebodysmall, Topictextcontainer } from "./styles";


function Topicpage(){
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const windowWidth = windowSize.current[0];
    return(
        <div style={(windowWidth > 992) ? TopicpagebodyLarge : Topicpagebodysmall }>
            <div style={Topictextcontainer}>
                <h1>เลือกสิ่งที่คุณสนใจ</h1>
            </div>
            <div style={Topicimagecontainer}>
                test
            </div>
        </div>
    )
};

export default Topicpage;