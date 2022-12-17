import { collection, onSnapshot, orderBy, query, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useState, useEffect } from "react";
import Message from "./Message";
import { db } from "../FireBase";
import SendMessage from "./SendMessage";

function Chat() {
  const [messages, setMessages] = useState([]);
  const[chats,setChats]=useState([]);
  const auth = getAuth();
  const currentUser = auth.currentUser;
  //const scroll = useRef()
  useEffect(() => {
    const getChats= () => {
    const unsub=onSnapshot(doc(db,"userChats",currentUser.uid),(doc) =>{
      setChats(doc.data());
    });
    return () => {
      unsub();
    };
  }
  currentUser.uid && getChats()
  }, [currentUser.uid]);
  console.log(Object.entries(chats));
  return (
    <div>
      {Object.entries(chats)?.map((chat) => (
        // <div
        //   className="userChat"
        //   key={chat[0]}
        //   onClick={() => handleSelect(chat[1].userInfo)}
        // >
        //   <img src={chat[1].userInfo.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{chat[1].userInfo.displayName}</span>
            <p>{chat[1].lastMessage?.text}</p>
          </div>

      ))}
      {/* {messages.map((message) => (
        <Message id={message.uid} message={message.text} />
      ))}
        <SendMessage/> */}
    </div>
  );
}

export default Chat;