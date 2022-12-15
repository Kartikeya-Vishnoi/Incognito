import {
  getDoc,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import {db} from "../FireBase";
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Card from "../Event Tracker/ui/Card";
import classes from "./InvestorItem.module.css";

function InvestorItem(props) {
  const navigate = useNavigate();
  const auth = getAuth();
  const currentUser = auth.currentUser;

  async function chathandler() {
    const combinedId =
      currentUser.uid > props.id
        ? currentUser.uid + props.id
        : props.id + currentUser.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: props.id,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", props.id), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <li className={classes.item}>
      <Card style={{ width: "300px", margin: "23px", background: "grey" }}>
        <img src={props.image} alt={props.name} className={classes.image}></img>
        <h3 className={classes.content}>{props.name}</h3>
        <div className={classes.actions}>
          <button
            onClick={chathandler}
          >
            Chat
          </button>
        </div>
      </Card>
    </li>
  );
}
export default InvestorItem;
