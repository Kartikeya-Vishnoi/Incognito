import { useNavigate } from "react-router-dom";
import Card from "../Event Tracker/ui/Card";
import classes from "./InvestorItem.module.css"

function InvestorItem(props) {
  const navigate=useNavigate();
  return (
    <li className={classes.item}>
    <Card style={{width:"300px",margin:"23px",background:"grey"}}>
        <img src={props.image} alt={props.name} className={classes.image}></img>
        <h3 className={classes.content}>{props.name}</h3>
        <div className={classes.actions}>
        <button onClick={() => {navigate("/chat")}}>Chat</button>
        </div>
    </Card>
    </li>
  );
}
export default InvestorItem;