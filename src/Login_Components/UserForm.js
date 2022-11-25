import classes from "./UserForm.module.css"
import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../FireBase";
import { useRef, useState } from "react";
import SignUp from "./SignUp";
function UserForm(props)
{

    const useremail=useRef();
    const password=useRef();
    const Enteredname=useRef();
    const Startupname=useRef();
    const BuisnessType=useRef();
    const Description=useRef();

    function OnSubmitHandler(e){
        e.preventDefault();
        let email=useremail.current.value
        let pass=password.current.value
        let name=Enteredname.current.value
        let startupname=Startupname.current.value
        let buisnesstype=BuisnessType.current.value
        let description=Description.current.value

        let userdata={
            UserEmail:email,
            Name:name,
            StartupName:startupname,
            Buisnesstype:buisnesstype,
            CompanyInfo:description,
            Password:pass
        }
        props.onadd(userdata);
    }

    return(
      <form className={classes.form} onSubmit={OnSubmitHandler}>
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
          <input type="text" required id="business" ref={BuisnessType}/>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Startup Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={Description}
          />
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input type="password" required id="password" ref={password} />
        </div>  
        </div>
        <div className={classes.actions}>
          <button>Update Info</button>
        </div>
      </form>

    )
        
}
export default UserForm