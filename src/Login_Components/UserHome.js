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
        console.log(list);
        const auth = getAuth();
        const user = auth.currentUser;
        const name = users.filter(function (el) {
          return el.uid == user.uid;
        });

        setUsername(name[0].Name);
      } catch (err) {
        console.log(err);
      }
    };
    fetchdata();
  }, []);
  const navigate = useNavigate();

  return (
    <div className={classes.style}>
      <header>
        <nav>
          <ul>
            <li>
              Update Profile
            </li>
            <li
              onClick={Signout}
            >
              LogOut
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
          </ul>
        </nav>
      </header>
      <h1>{`Welcome ${username}`}</h1>
    </div>
  );
}

export default UserHome;
