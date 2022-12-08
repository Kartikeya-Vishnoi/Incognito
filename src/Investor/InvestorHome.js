import { useState,useEffect} from "react";
import { getDocs,collection } from "firebase/firestore";
import { db } from "../FireBase";
import { getAuth } from "firebase/auth";
function InvestorHome(){

    const[username,setUsername]=useState();
    useEffect(() => {
        const fetchdata = async () => {
          let list = [];
          try {
            const querySnapshot = await getDocs(collection(db, "investor"));
            querySnapshot.forEach((doc) => {
              list.push(doc.data());
            });
            const auth = getAuth();
            const user = auth.currentUser;
            const vc = list.filter(function (el) {
              return el.id === user.uid;
            });
            console.log(vc)
            setUsername(vc[0].name);
          } catch (err) {
            console.log(err);
          }
        };
        fetchdata();
      }, []);
      return(
        <h1>
           Hi {`${username}`} !!
        </h1>
      )
}
export default InvestorHome