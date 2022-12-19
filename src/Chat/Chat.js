import { collection, onSnapshot, orderBy, query, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useState, useEffect } from "react";
import Messages from "./Messages";
import { db } from "../FireBase";
import SendMessage from "./SendMessage";
import { useContext } from "react";
import { ChatContext } from "../store/ChatContext";
import classes from "./Chat.module.css"

function Chat() {
  const [messages, setMessages] = useState([]);
  const[chats,setChats]=useState([]);
  const auth = getAuth();
  const currentUser = auth.currentUser;
  const {dispatch}=useContext(ChatContext)
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

  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };

  return (
    <div>
      {Object.entries(chats)?.map((chat) => (
        <div
          className="userChat"
          key={chat[0]}
          onClick={() => {handleSelect(chat[1].userInfo)}}
        >
           <img src={chat[1].userInfo.photoURL} alt="" />
          <div className="userChatInfo">
            <h3 className={classes.h}>{chat[1].userInfo.displayName}</h3>

          </div>
          <Messages/>
          <SendMessage></SendMessage>
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