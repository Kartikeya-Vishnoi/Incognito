import { useRef } from "react"
import classes from "./SendMessage.module.css"
import {auth,db} from "../FireBase"
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

  function SendMessage() {
  let message=useRef();

  async function sendmessagehandler(e){
  const EnteredMessage=message.current.value;  
  console.log(EnteredMessage)
  e.preventDefault()
  //const {uid}= auth.currentUser
  console.log(auth.currentUser.uid)
  await addDoc(collection(db,'messages'),{
    text:EnteredMessage,
    uid:auth.currentUser.uid,
    timestamp:serverTimestamp()
  })
  }
    return(
        <div className={classes.style}>
        <footer>
        <form onSubmit={sendmessagehandler}>
          <input type="text" required id="name" placeholder="Message" ref={message}/>
          <button type="submit">Send</button>
        </form>
        </footer>
        </div>
    )
}
export default SendMessage