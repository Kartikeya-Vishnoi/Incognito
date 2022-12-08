import { useRef } from "react";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";
import React from "react";

function NewMeetupform(props) {
  //declared references to track input entries in form
  const titleinputRef = useRef();
  const imageinputRef = useRef();
  const addressinputRef = useRef();
  const descriptioninputRef = useRef();

  function submithandler(event) {
    // react provides even as a default parameter for events like onsubmit
    event.preventDefault();
    const enteredtitle = titleinputRef.current.value;
    const enteredimg = imageinputRef.current.value;
    const enteredAddress = addressinputRef.current.value;
    const entereddescription = descriptioninputRef.current.value;

    const meetupdata = {
      title: enteredtitle,
      image: enteredimg,
      address: enteredAddress,
      description: entereddescription,
    };

    console.log(meetupdata);
    props.onadd(meetupdata);
  }

  return (
    <Card className="classes.form" style={{width:"50vw"}}>
      <form className={classes.form} onSubmit={submithandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleinputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageinputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Meetup Address</label>
          <input type="text" required id="address" ref={addressinputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea
            id="description"
            ref={descriptioninputRef}
            required
            rows="5"
          />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
export default NewMeetupform;
