import classes from "./MeetupItem.module.css"
import Card from "../ui/Card";
function Meetupitem(props){

    return <li className={classes.item}>
        <Card>
        <div className={classes.image}>
            <img src={props.image} alt={props.title}></img>
        </div>
        <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
            {/* <button onClick={togglefavoritestatushandler}>{itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}</button> */}
        </div>
        </Card>
    </li>
}

export default Meetupitem;