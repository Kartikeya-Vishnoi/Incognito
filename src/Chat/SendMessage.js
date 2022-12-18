import { useRef } from "react"
import classes from "./SendMessage.module.css"
import {auth,db} from "../FireBase"
import { addDoc, collection,updateDoc,doc } from "firebase/firestore";
import { useState,useContext } from "react";
import { ChatContext } from "../store/ChatContext";
import { arrayUnion } from "firebase/firestore";
import { AuthContext } from "../store/AuthContext";
import { getAuth } from "firebase/auth";
import { Timestamp } from "firebase/firestore";

  function SendMessage() {
  let message=useRef();
  const[text,setText]=useState()
  const { data } = useContext(ChatContext);
  const auth = getAuth();
  const currentUser=auth.currentUser

   async function sendmessagehandler(e){
    e.preventDefault()
    await updateDoc(doc(db, "chats", data.chatId), {
      messages: arrayUnion({
        text,
        senderId: currentUser.uid,
        date: Timestamp.now(),
      }),
    });
    console.log(currentUser.uid)
   }
    return(
        <div className={classes.style}>
        <footer>
        <form onSubmit={sendmessagehandler}>
          <input type="text" required id="name" placeholder="Type Something..." onChange={e => setText(e.target.value)}/>
          <button type="submit"  onClick={sendmessagehandler}>Send</button>
        </form>
        </footer>
        </div>
    )
}
export default SendMessage