
import { useRef} from "react";
import { buttonstyleLarge,buttonstyleSmall,imagecontainer, imagestyle, topicbackgroundLarge, topicbackgroundSmall } from "./styles";
import { Topicselectservice } from "../../../Services/Topicselectservice";

interface Topicpresentprops{
    imageurl : string,
    topic : string,
    roomid : number,
}
function Topicpresent(this: any, props : Topicpresentprops){
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const windowWidth = windowSize.current[0];

    const onMouseoverHandler = () =>{
      const button = document.getElementById(`button${props.roomid}`);
      if(button){
        button.style.cursor = "pointer";
      }
    }
    const SelecttopicbuttonHandler = ()=>{
      Topicselectservice.findChat(props.roomid);
    }
    return(
      <div style={windowWidth >= 992 ? topicbackgroundLarge : topicbackgroundSmall}>
        <div style={imagecontainer}>
            <img src={props.imageurl} style={imagestyle}></img>
        </div>
        <button id={`button${props.roomid}`} style={windowWidth >= 992 ? buttonstyleLarge : buttonstyleSmall} onClick={SelecttopicbuttonHandler} onMouseOver={onMouseoverHandler}>{props.topic}</button>
      </div>  
    );
}

export default Topicpresent