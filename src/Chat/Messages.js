import Message from "./Message"
import { useState,useContext } from "react";
import { ChatContext } from "../store/ChatContext";
import { useEffect } from "react";
import { onSnapshot } from "firebase/firestore";
import { doc } from "firebase/firestore";
import {db} from "../FireBase"

function Messages(props){
    const [messages, setMessages] = useState([]);
    const { data } = useContext(ChatContext);
    console.log(data)
    useEffect(() => {
      const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
        doc.exists() && setMessages(doc.data().messages);
      });
      
      return () => {
        unSub();
      };
    }, [data.chatId]);
  
    // console.log(messages)
return(
    <div className="messages">
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}
    </div>
)
}

export default Messages