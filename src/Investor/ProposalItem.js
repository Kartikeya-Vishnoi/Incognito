import React, { useEffect, useState, useContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { db } from "../FireBase";
import Card from "../Event Tracker/ui/Card";
import classes from "./ProposalItem.module.css"
import { AuthContext } from "../store/AuthContext";

function ProposalItem(props){
    const[username,setUsername]=useState(null);
    
    const navigate=useNavigate();
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
          //const user = auth.currentUser;
          const name = users.filter(function (el) {
            return el.uid === props.proposal;
          });
          
          setUsername(name[0].Name);
        } catch (err) {
          console.log(err);
        }
      };
      fetchdata();
    }, []);
    
console.log(props.proposal)
return(
<li className={classes.item}>
    {
     username===null?
     "Loading.... this one":
    <Card>
    <h3>
    {username}</h3>
    </Card>
    }
    </li>
)
}

export default ProposalItem