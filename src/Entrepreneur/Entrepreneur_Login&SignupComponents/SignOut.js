import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function SignOut(){
    const navigate=useNavigate();
    const auth = getAuth();
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      console.log(error);
    });   
}

export default SignOut