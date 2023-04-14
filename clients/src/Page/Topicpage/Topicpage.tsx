import React, { useEffect, useRef, useState } from "react";
import { textcontainer, textstyleLarge, textstyleSmall, topicpagebodyLarge, topicpagebodySmall, topicscontainerLarge, topicscontainerSmall } from "./styles";
import Topicpresent from "./components/Topicpresent";
import mountainImage from "./components/assets/mountain.jpg";
import dinosaurImage from "./components/assets/dinosaur.jpg";
import foodImage from "./components/assets/food.jpg";
import { Topic } from "../../Types/Topic";
import TopicService from "../../Services/Topicservices";
import Loadingpage from "../Loadingpage/Loadingpage";

function Topicpage(){
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const windowWidth = windowSize.current[0];
    const [options,setOptions] = useState<Topic[]>([]);

    const fetchOptions = async () =>{
        const topics = await TopicService.getsortedTopics();
        setOptions(topics);
    }
    useEffect(() =>{
        fetchOptions();
    },[],);

    return(
        
        options ? 
        <div style={(windowWidth >= 992) ? topicpagebodyLarge : topicpagebodySmall}>
            <div style={textcontainer}>
                <h2  style={windowWidth >= 992 ? textstyleLarge : textstyleSmall}>เลือกหัวข้อที่น่าสนใจ</h2>
                <h1 style={windowWidth >= 992 ? textstyleLarge : textstyleSmall}>เเล้วมองหาคนที่สนใจเหมือนคุณเลย</h1>
            </div>
            <div style={windowWidth >= 992 ? topicscontainerLarge : topicscontainerSmall}>
                {
                    options.map((topic) =>{
                        return(
                            <Topicpresent 
                            imageurl={topic.imageurl} 
                            topic={topic.topicname} 
                            roomid={topic.topicroomid}                            
                            />
                        )
                    })
                }
            </div>
        </div>

        :
        
        <Loadingpage/>
    );
}

export default Topicpage;