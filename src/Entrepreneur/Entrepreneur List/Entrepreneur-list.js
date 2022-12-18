import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../../FireBase";
import EntrepreneurItem from "./EntrepreneurItem";
import classes from "./Entrepreneur-list.module.css";
import Navbar from "../../components/Navbar";

function EntrepreneurList() {
  const [entlist, Setentlist] = useState(null);
  useEffect(() => {
    const q = query(collection(db, "users"));
    const listfn = onSnapshot(q, (querysnapshot) => {
      let list = [];
      querysnapshot.forEach((doc) => {
        list.push({ ...doc.data() });
      });
      Setentlist(list);
      console.log(list);
    });
    return () => listfn();
  }, []);
  console.log(entlist);

  return (
    <>
    <Navbar/>
      {entlist == null ? (
        "Loading"
      ) : (
        <ul classname={classes.list}>
          {entlist.map((ent) => (
            <EntrepreneurItem
              id={ent.uid}
              name={ent.Name}
              image={
                "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
              }
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default EntrepreneurList;
