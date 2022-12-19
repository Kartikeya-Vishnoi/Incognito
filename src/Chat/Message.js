import React, { useContext, useEffect, useRef } from "react";
import { getAuth } from "firebase/auth";
import classes from "./Message.module.css"
import { ChatContext } from "../store/ChatContext";

const Message = ({ message }) => {
    const auth = getAuth();
    const currentUser = auth.currentUser;
    const { data } = useContext(ChatContext);

    const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  const messageclass = message.senderId === currentUser.uid;
  console.log(message)
  return (
    <div
      ref={ref}
    >
      {/* <div className="messageInfo"> */}
        {/* <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        /> */}
        {/* <span>just now</span> */}
      {/* </div> */}
      <div className={`${classes["messages_user"]} ${
          !messageclass && classes.sec
        } `}>
        <p>{message.text}</p>
        {/* {message.img && <img src={message.img} alt="" />} */}
      </div>
    </div>
  );
};

export default Message;