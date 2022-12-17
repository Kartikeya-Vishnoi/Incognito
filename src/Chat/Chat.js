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
      {/* {messages.map((message) => (
        <Message id={message.uid} message={message.text} />
      ))}
        <SendMessage/> */}
    </div>
  );
}

export default Chat;