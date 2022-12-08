import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useState, useEffect } from "react";
import Message from "./Message";
import { db } from "../FireBase";
import SendMessage from "./SendMessage";

function Chat() {
  const [messages, setMessages] = useState([]);
  //const scroll = useRef()
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let Messages = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.data.text);
        Messages.push({ ...doc.data(), id: doc.id });
        //console.log(doc)
      });
      setMessages(Messages);
      console.log(Messages[1].text);
    });
    return () => unsubscribe();
  }, []);
  //console.log(messages.length);
  return (
    <div>
      {messages.map((message) => (
        <Message id={message.uid} message={message.text} />
      ))}
        <SendMessage/>
    </div>
  );
}

export default Chat;
