import React, { useEffect, useState, useContext } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { db } from "../FireBase";
import classes from "./UserHome.module.css";
import { AuthContext } from "../store/AuthContext";

function UserHome() {
  const {dispatch}=useContext(AuthContext)

  function Signout(){
  
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch({type:"LOGIN", payload:auth.currentUser})
        navigate("/")
      })
      .catch((error) => {
        console.log(error);
      });
  }
  const [username, setUsername] = useState();
  const [userpitch, setUserpitch] = useState(null);
  const [userBusinessType,  setUserBuisnessType] = useState(null);
  const [userCompanyInfo, setCompanyInfo] = useState(null);
  const [userStartUpName, setStartUpName] = useState(null);
  const [userTimeStamp, setTimeStamp] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  
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
        setUserpitch(name[0].pitchUrl);
        setUserBuisnessType(name[0].Buisnesstype)
        setCompanyInfo(name[0].CompanyInfo)
        setStartUpName(name[0].StartupName)
        setTimeStamp(name[0].timestamp)
        setUserEmail(name[0].Email)

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

   <div className={classes.container}>
      <div className={classes.video}>
      {
       userpitch===null ? "Loading" 
       : 
      <video  controls autoPlay >
        <source src={userpitch} type="video/mp4" />
        </video>
      }
      </div>

      <div className={classes.details}>
        <ul>
          <h2>DETAILS REGARDING PITCH</h2>
          <br></br>
          <li><h3>ENTERPRENUER NAME:</h3>{` ${username}`}</li>
          <li><h3>ENTERPRENUER EMAIL:</h3>{` ${username}`}</li>
       <li><h3>BUSINESS TYPE:</h3>{` ${userBusinessType}`}</li>
     <li><h3>STARTPUP INORMATION:</h3>{`${userCompanyInfo}`}</li>
     <li><h3>STARTUP NAME:</h3>{` ${userStartUpName}`}</li>
     <li><h3>TIME INFO:</h3>{` ${userTimeStamp}`}</li>
        </ul>
    
      </div>
   </div>
     

    </div>
  );
}

export default UserHome;