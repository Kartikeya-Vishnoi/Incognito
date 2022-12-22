import { useState, useEffect, useContext } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../FireBase";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Proposalslist from "./Proposalslist";
import { AuthContext } from "../store/AuthContext";
import classes from "./InvestorHome.module.css";

function InvestorHome() {
  const [username, setUsername] = useState();
  const [proposal, Setproposal] = useState([""]);
  const [List,setList]=useState();
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const a = getAuth();
  console.log(a.currentUser.uid);
  function Signout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch({ type: "LOGIN", payload: auth.currentUser });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }
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
        console.log(vc);
        //setList(vc);
        setUsername(vc[0].name);
        Setproposal(vc[0].requests);
        console.log(vc[0].requests);
      } catch (err) {
        console.log(err);
      }
    }; 
    fetchdata();
  }, []);
  console.log(proposal);

  return (
    <>
      <div className={classes.style}>
        <header>
          <nav>
            <ul>
              <li
                onClick={() => {
                  navigate("/entlist");
                }}
              >
                Explore Entrepreneurs
              </li>
              <li>Update Profile</li>
              <li onClick={Signout}>LogOut</li>
            </ul>
          </nav>
        </header>
        <div>
          {proposal === "null" ? (
            <h1>
              Hello {`${username}`}, You don't have any proposals as of now
            </h1>
          ) : (
            <h1>Hello {`${username}`}, here are your Proposals</h1>
          )}
        </div>
        <br></br>
        <div>
          {proposal !== "null" ? (
            <h3>
              <Proposalslist list={proposal} />
            </h3>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
export default InvestorHome;