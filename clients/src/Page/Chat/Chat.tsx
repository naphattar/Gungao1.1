import React, { useEffect, useState } from "react";
import "./Chat.css";
import { Socket } from "socket.io-client";
import ScrollToBottom from 'react-scroll-to-bottom';
interface Chatprops{
    socket: Socket,
    username : String,
    roomid : Number
}

interface Messagedata{
    room : Number,
    author : String,
    message : String,
    time : String
}
function Chat(chatpropslist : Chatprops ) {

  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState<Messagedata[]>([]);
  const socket = chatpropslist.socket;

  const sendMessage = async () => {
    if (currentMessage !== "") {
      const minites = new Date(Date.now()).getMinutes() < 10 ? "0"+new Date(Date.now()).getMinutes() : new Date(Date.now()).getMinutes();

      const messageData : Messagedata= {
        room: chatpropslist.roomid,
        author: chatpropslist.username,
        message: currentMessage,
        time:
          new Date(Date.now()).getHours() +
          ":" +
          minites,
      };
      await socket.emit("send_message", messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage("");
    }
  };

  useEffect(() : any => {
    socket.on("recieve_message", (data) => {
      setMessageList(
        (list) => [...list, data]
        // added new message to the messagelist
      );
    });

    return () => socket.off("recieve_message");
  }, [socket]);

  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>Live Chat</p>
      </div>
      <div className="chat-body">
        <ScrollToBottom className="message-container">
          {messageList.map((msg) => {
            return (
              <div
                className="message"
                id={chatpropslist.username === msg.author ? "other" : "you"}
              >
                <div>
                  <div className="message-content">
                    <p>{msg.message}</p>
                  </div>
                  <div className="message-meta">
                    <p>{msg.time}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </ScrollToBottom>
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={currentMessage}
          placeholder="Send Something"
          onChange={(event) => {
            setCurrentMessage(event.target.value);
            
          }}
          onKeyPress={(event) => {
            event.key === "Enter" && sendMessage();
          }}
        />

        <button onClick={sendMessage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-send"
            viewBox="0 0 16 16"
          >
            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
export default Chat;