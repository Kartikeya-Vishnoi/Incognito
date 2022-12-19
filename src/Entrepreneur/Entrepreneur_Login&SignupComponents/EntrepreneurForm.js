import classes from "./EntrepreneurForm.module.css";
// import { doc, setDoc } from "firebase/firestore";
// import { db } from "../FireBase";
import { useRef, useState } from "react";
import { storage } from "../../FireBase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useEffect } from "react";
import Navbar from "../../components/Navbar"
// import SignUp from "./SignUp";
function EntrepreneurForm(props) {
  
  const[link,Setlink]=useState();
  const [pitch, SetPitch] = useState();
  const [percent,Setpercent]= useState(null);

  const useremail = useRef();
  const password = useRef();
  const Enteredname = useRef();
  const Startupname = useRef();
  const BuisnessType = useRef();
  const Description = useRef();

  function OnSubmitHandler(e) {
    e.preventDefault();
    let email = useremail.current.value;
    let pass = password.current.value;
    let name = Enteredname.current.value;
    let startupname = Startupname.current.value;
    let buisnesstype = BuisnessType.current.value;
    let description = Description.current.value;
    let url=link;

    let userdata = {
      UserEmail: email,
      Name: name,
      StartupName: startupname,
      Buisnesstype: buisnesstype,
      CompanyInfo: description,
      Password: pass,
      pitchUrl:url,
    };
    props.onadd(userdata);
  }

  useEffect(() => {
    const uploadfile = () => {
      const name = new Date().getTime + pitch.name;
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, pitch);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            Setpercent(progress)
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default: break;  
          }
        },
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            Setlink(downloadURL);
          });
        }
      );
    };
    pitch && uploadfile();
  }, [pitch]);

  return (
    <div>
    <Navbar/>
    <form className={classes.form} onSubmit={OnSubmitHandler}>
      <h1>Share your Ideas !!!</h1>
      <br></br>
      <div className={classes.container}>
      <div className={classes.control}>
        <label htmlFor="email">Email</label>
        <input type="email" required id="email" ref={useremail} />
      </div>
      <div className={classes.control}>
        <label htmlFor="Name">Name</label>
        <input type="text" required id="name" ref={Enteredname} />
      </div>
      <div className={classes.control}>
        <label htmlFor="Comp Name">Startup Name</label>
        <input type="text" required id="startup" ref={Startupname} />
      </div>
      <div className={classes.control}>
        <label htmlFor="Buisness Type">Buisness type</label>
        <input type="text" required id="business" ref={BuisnessType} />
      </div>
      <div className={classes.control}>
        <label htmlFor="description">Startup Description</label>
        <textarea id="description" required rows="5" ref={Description} />
        <div className={classes.control}>
          <label htmlFor="Buisness Type">Upload your pitch</label>
          <input
            type="file"
            required
            id="pitch"
            onChange={(e) => SetPitch(e.target.files[0])}
          />
          {percent!==null && percent}
          {/* <div className={classes.actions}>
            <button>Upload pitch</button>
          </div> */}
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input type="password" required id="password" ref={password} />
        </div>
      </div>
      <div className={classes.actions}>
        <button>Update Info</button>
      </div>
      </div>
    </form>
    </div>
  );
}
export default EntrepreneurForm;