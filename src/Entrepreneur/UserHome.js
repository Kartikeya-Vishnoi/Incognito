import React, { useEffect, useState, useContext } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { db } from "../FireBase";
import classes from "./UserHome.module.css";

function UserHome() {
  function Signout(){
    //const navigate = useNavigate();
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const [username, setUsername] = useState();
  const [userpitch, SetUserpitch] = useState(null);
  let users = [];
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
        const user = auth.currentUser;
        const name = users.filter(function (el) {
          return el.uid === user.uid;
        });
        
        setUsername(name[0].Name);
        SetUserpitch(name[0].pitchUrl)
      } catch (err) {
        console.log(err);
      }
    };
    fetchdata();
  }, []);
  console.log(userpitch);
  const navigate = useNavigate();
  return (
    <div className={classes.style}>
      <header>
        <nav>
          <ul>
          <li onClick={() => {navigate("/vclist")}}>
              Explore VC's
            </li>
            <li>
              Update Profile
            </li>
            <li
              onClick={Signout}
            >
              LogOut
            </li>
            <li onClick={() => {navigate("/events")}}>
              Event Tracker
            </li>
          </ul>
        </nav>
      </header>
      <h1>{`Welcome ${username}`}</h1>
      <br></br>
      {
       userpitch===null ? "Loading" 
       : 
      <video width="750" height="500" controls autoPlay >
        <source src={userpitch} type="video/mp4" />
        </video>
      }
    </div>
  );
}

export default UserHome;
