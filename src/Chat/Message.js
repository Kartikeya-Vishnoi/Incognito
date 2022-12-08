import classes from "./Message.module.css"
import {auth} from "../FireBase"

function Message(props){
    //console.log(props.key) 
     const messageclass=
     props.id===auth.currentUser.uid

   // console.log(messageclass);
return(
    <div>
    
    <p className={`${classes['messages_user']} ${!messageclass && classes.sec} `}>
        {/* {props.message}{" "}{props.id} */}
        
        {props.message}
    </p>
    </div>
)
}

export default Message