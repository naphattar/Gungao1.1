import React from "react";
import {io, Socket} from "socket.io-client";
import Chat from "./Chat";

const api_url : string = "http://localhost:4000"

// create socket connect to the server
const socket  = io(api_url);

function Chatmain(){
    return(
        <div className="chatmain">
            
        </div>
    );
}

export default Chatmain;