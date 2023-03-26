import {ReactComponentElement,useEffect,useState} from "react";
import { Link } from "react-router-dom";
import TopicService from "../../Services/Topicservices";
import "../Mainpage/Mainpage.css";

interface Selecttopicbuttonprops{
    roomid : number | undefined
}
function Selecttopicbutton(selecttopicbuttonprops : Selecttopicbuttonprops){
    const [roomid,setRoomid] = useState<number>(0);
    
    const increaseTopic = async () =>{
        await TopicService.increaseTopicUsed(roomid);
    }
    useEffect(() : any =>{
        if(selecttopicbuttonprops.roomid){
            setRoomid(selecttopicbuttonprops.roomid);
        }
    });
    if(roomid !== 0){
        const chaturl : string = `/chat/${roomid}`;
        return(
            <button className="selecttopicbutton" onClick={increaseTopic}>
            <Link to={chaturl} className="selecttopiclink">Find Your Chatmate!</Link>
            </button>
        );
    }
    return(
        <button className="selecttopicbutton">
            <Link to="/error" className="selecttopiclink">Find Your Chatmate!</Link>
        </button>
    );
}

export default Selecttopicbutton;
