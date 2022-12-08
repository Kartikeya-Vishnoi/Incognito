import classes from "./MeetupList.module.css";
import Meetupitem from "./MeetupItem";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.list.map((meetup) => (
        <Meetupitem
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
