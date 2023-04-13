
import { useRef } from "react";
import { buttonstyleLarge,buttonstyleSmall,imagecontainer, imagestyle, topicbackgroundLarge } from "./styles";

interface Topicpresentprops{
    imageurl : string,
    topic : string,
}
function Topicpresent(props : Topicpresentprops){
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const windowWidth = windowSize.current[0];
    return(
      <div style={topicbackgroundLarge}>
        <div style={imagecontainer}>
            <img src={props.imageurl} style={imagestyle}></img>
        </div>
        <button style={windowWidth >= 992 ? buttonstyleLarge : buttonstyleSmall}>{props.topic}</button>
      </div>  
    );
}

export default Topicpresent