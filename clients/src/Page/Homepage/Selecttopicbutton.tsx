import {ReactComponentElement,useEffect,useState} from "react";
import { Link } from "react-router-dom";
import "./Mainpage.css"

interface Selecttopicbuttonprops{
    roomid : number | undefined
}
function Selecttopicbutton(selecttopicbuttonprops : Selecttopicbuttonprops){
    const [roomid,setRoomid] = useState<Number>(0);

    useEffect(() : any =>{
        if(selecttopicbuttonprops.roomid){
            setRoomid(selecttopicbuttonprops.roomid);
        }
    });
    if(roomid !== 0){
        const chaturl : string = `/chat/${roomid}`;
        return(
            <button className="selecttopicbutton">
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
