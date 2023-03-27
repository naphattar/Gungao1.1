import { useRef } from "react";
import { Topicexamplecontainer,  TopicpagebodyLarge, TopicpagebodySmall, Topictextcontainer } from "./styles";
import { mockTopics } from "./MockTopicExample";
import TopicPresent from "./TopicPresent/TopicPresent";

function Topicpage(){
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const windowWidth = windowSize.current[0];
    return(
        <div style={(windowWidth > 992) ? TopicpagebodyLarge : TopicpagebodySmall }>
            <div style={Topictextcontainer}>
                <h1>เพียงเลือกสิ่งที่คุณสนใจ</h1>
            </div>
            <div style={Topicexamplecontainer}>
                {mockTopics.map((topic) =>{
                    return(
                        <TopicPresent data={topic}/>
                    )
                })}
            </div>
        </div>
    )
};

export default Topicpage;