import { useState, useEffect } from "react";
import { query, collection, onSnapshot } from "firebase/firestore";
import { auth, db } from "../../FireBase";
import MeetupList from "../Meetups/MeetupList";
import classes from "./AllMeetups.module.css"

function AllMeetups() {
  const [loadedmeetups, setloadedmeetups] = useState([]);
  const user = auth.currentUser;
  useEffect(() => {
    const q = query(collection(db, "events"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let list = [];
      querySnapshot.forEach((doc) => {
        list.push({ ...doc.data() });
      });
      //console.log(loadedmeetups);
      const events = list.filter(function (el) {
        return el.id === user.uid;
      });
      setloadedmeetups(events);
    });
    return () => unsubscribe();
  }, []);

  console.log(loadedmeetups);

  return (
    <>
    <section>
      <h1 className={classes.heading}>All Meetups</h1>
      <MeetupList list={loadedmeetups}/>
    </section>
    </>
  );
}

export default AllMeetups;
