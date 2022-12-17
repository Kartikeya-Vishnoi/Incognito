import {
  getDoc,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  arrayUnion
} from "firebase/firestore";
import {db} from "../FireBase";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Card from "../Event Tracker/ui/Card";
import classes from "./InvestorItem.module.css";
import { AuthContext } from "../store/AuthContext";
import { useContext } from "react";
import { connect } from "mongoose";

function InvestorItem(props) {
  const navigate = useNavigate();
  const auth = getAuth();
  const {currentUser}=useContext(AuthContext)
  console.log(currentUser);
  const currentuser = auth.currentUser;

  async function Connect(){
    await updateDoc(doc(db, "investor", props.id), {
      requests:arrayUnion(currentuser.uid)
    });
  }

  async function chathandler() {
    const combinedId =
      currentuser.uid > props.id
        ? currentuser.uid + props.id
        : props.id + currentuser.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        await updateDoc(doc(db, "userChats", currentuser.uid), {
          [combinedId + ".userInfo"]: {
            uid: props.id,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", props.id), {
          [combinedId + ".userInfo"]: {
            uid: currentuser.uid,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (error) {
      console.log(error)
    }
    navigate("/chat")
  }

  return (
    <li className={classes.item}>
      <Card style={{ width: "300px", margin: "23px", background: "grey" }}>
        <img src={props.image} alt={props.name} className={classes.image}></img>
        <h3 className={classes.content}>{props.name}</h3>
        <div className={classes.actions}>
          <button
            onClick={Connect}
          >
            Connect
          </button>
        </div>
      </Card>
    </li>
  );
}
export default InvestorItem;
