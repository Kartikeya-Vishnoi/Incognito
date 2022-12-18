import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../FireBase";
import InvestorItem from "./InvestorItem";
import classes from "./Investor-list.module.css";
import Navbar from "../components/Navbar";
function InvestorList() {
  const [vclist, Setvclist] = useState(null);
  useEffect(() => {
    const q = query(collection(db, "investor"));
    const listfn = onSnapshot(q, (querysnapshot) => {
      let list = [];
      querysnapshot.forEach((doc) => {
        list.push({ ...doc.data() });
      });
      Setvclist(list);
      console.log(list);
    });
    return () => listfn();
  }, []);
  console.log(vclist);

  return (
    <>
    <Navbar/>
      {vclist == null ? (
        "Loading"
      ) : (
        <ul classname={classes.list}>
          {vclist.map((investor) => (
            <InvestorItem
              id={investor.id}
              name={investor.name}
              image={investor.imgurl}
              description={investor.CompanyInfo}
            />
          ))}
        </ul>
      )}
    </>
  );
}

export default InvestorList;