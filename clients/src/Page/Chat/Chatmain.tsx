import React, { useEffect, useState } from "react";
import { useParams , useNavigate} from "react-router-dom";
import {io, Socket} from "socket.io-client";
import AuthService from "../../Services/Authservices";
import Chat from "./Chat";

const api_url : string = "http://localhost:4000"

// create socket connect to the server
const socket  = io(api_url);

function Chatmain(){
    const [username,setUsername] = useState<String>("");
    const [roomid์,setRoomid] = useState<Number>(0);
    const navigate = useNavigate();

    let {roomID} = useParams();
    
    const getRoomID = () : Number  =>{
        if(roomID){
            const roomidNum = parseInt(roomID.trim());
            setRoomid(roomidNum);
            return roomidNum;
        }
        return 0;
    };

    const getUsername = async()  =>{
        AuthService.getCurrentUser()
        .then((currentUser : any) =>{
            setUsername(currentUser.username);
            return currentUser.username;
        })
        .catch((err : any) =>{
            console.log(err.response.data);
            navigate("/error");
        });
        return "";
    }
    const getChatdata = async() =>{
        const roomid = getRoomID();
        if(roomid > 0){
            await getUsername();
            socket.emit("join_room", roomid);
        }
    };


    useEffect(() =>{
        getChatdata()
    },[])
    
    
    if(username !== "" && roomid์ > 0){
        return(
        <div className="chatmain">
            <Chat socket={socket} username={username} roomid={roomid์}/>
        </div>
        );
    }
    return(
        <div className="Loadingpage">
            <p>Loading ... </p>
        </div>
    )
}

export default Chatmain;