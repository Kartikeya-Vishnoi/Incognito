import { CirclesWithBar } from "react-loader-spinner"
import { useNavigate } from "react-router-dom"
import classes from "./LoginSwitch.module.css"

function LoginSwitch(){
const navigate=useNavigate();
return(
<div className={classes.doc}>
        <div className={classes.spinner}>
        <CirclesWithBar height="300" width="300" color="white" wrapperStyle={{}} wrapperClass="" visible={true} outerCircleColor="" innerCircleColor="" barColor="" ariaLabel='circles-with-bar-loading'/>
        </div>
        <h2 className={classes.h3}>Login As??</h2>
        <div className={classes.actions}>
        <button className={classes.button} onClick={() => navigate("/entrepreneurlogin")}>Entrepreneur</button>
        <button className={classes.button} onClick={() => navigate("/investorlogin")}>Investor</button>
        </div>
        </div>
)
}

export default LoginSwitch