import {RotatingLines} from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'
import classes from "./Who_r_u.module.css"
function Navigator(){
    const navigate=useNavigate();
    return(
        <div className={classes.doc}>
        <div className={classes.spinner}>
        <RotatingLines strokeColor="green" strokeWidth="5" animationDuration="0.5" width="250" visible={true}/>
        </div>
        <h2 className={classes.h3}>You Are??</h2>
        <div className={classes.actions}>
        <button className={classes.button} onClick={() => navigate("/entrepreneursignup")}>Entrepreneur</button>
        <button className={classes.button} onClick={() => navigate("/investorsignup")}>Investor</button>
        </div>
        </div>
    )
}
export default Navigator