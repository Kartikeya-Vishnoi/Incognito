import React, { useEffect, useState, useContext } from "react";
import {
  collection,
  getDocs,
  getDoc,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  arrayUnion,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { db } from "../FireBase";
import Card from "../Event Tracker/ui/Card";
import classes from "./ProposalItem.module.css";
import { AuthContext } from "../store/AuthContext";
import { ChatContext } from "../store/ChatContext";

function ProposalItem(props) {
  const [username, setUsername] = useState(null);
  const [userCompanyInfo, setUserCompanyInfo] = useState(null);
  const [userStartUpName, setUserStartUpName] = useState(null);
  const [userBuisnessType, setUserBuisnessType] = useState(null);
  const [id, setUserid] = useState();
  const [pitch,Setpitch]=useState();
  const {dispatch}=useContext(ChatContext)

    async function chatHandler() {
      console.log(id)
      const obj={id:props.proposal}
      const combinedId =
        currentuser.uid > obj.id
          ? currentuser.uid + obj.id
          : obj.id + currentuser.uid;

      try {
        const res = await getDoc(doc(db, "chats", combinedId));
        if (!res.exists()) {
          await setDoc(doc(db, "chats", combinedId), { messages: [] });

          await updateDoc(doc(db, "userChats", currentuser.uid), {
            [combinedId + ".userInfo"]: {
              uid: obj.id,
            },
            [combinedId + ".date"]: serverTimestamp(),
          });

          await updateDoc(doc(db, "userChats", obj.id), {
            [combinedId + ".userInfo"]: {
              uid: currentuser.uid,
            },
            [combinedId + ".date"]: serverTimestamp(),
          });
        }
      } catch (error) {
        console.log(error);
      }
      dispatch({type:"CHANGE_USER",payload:obj})
      navigate("/chat");
    }
  
  const navigate = useNavigate();
  let users = [];
  const auth = getAuth();
  const currentuser = auth.currentUser;
  useEffect(() => {
    const fetchdata = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          list.push(doc.data());
        });
        users = list;
        const auth = getAuth();
        //const user = auth.currentUser;
        const name = users.filter(function (el) {
          return el.uid === props.proposal;
        });

        setUsername(name[0].Name);
        setUserCompanyInfo(name[0].CompanyInfo);
        setUserStartUpName(name[0].StartupName);
        setUserBuisnessType(name[0].userBuisnessType);
        setUserid(name[0].uid);
        Setpitch(name[0].pitchUrl)
      } catch (err) {
        console.log(err);
      }
    };
    fetchdata();
  }, []);

  console.log(props.proposal);
  return (
    <li className={classes.item}>
      {username === null ? (
        ""
      ) : (
        <Card style={{ width: "800px", margin: "50px", height: "450px" }}>
          <div className={classes.blue}></div>
          <div className={classes.details}>
            <h3>ENTERPRENUER'S NAME : {username}</h3>
            <p>STARTUP NAME : {userCompanyInfo}</p>
            <h3>STARTUP INFORMATION : {userStartUpName}</h3>
            {/* <h3>BUISNESS TYPE :   {userBuisnessType}</h3> */}
            <div className={classes.btns}>
            <a href={pitch} >EXPLORE</a>
            </div>
           {/* <button className={classes.btn} onClick={chatHandler}>
           <a href={pitch} >EXPLORE</a>
            </button> */}
            <button className={classes.btn} onClick={chatHandler}>
              CONTACT
            </button>
          </div>
        </Card>
      )}
    </li>
  );
}

export default ProposalItem;