import Layout from "../Event_Tracker_Components/Layout";
import NewMeetupform from "../Meetups/NewMeetupForm";
import {auth,db} from "../../FireBase";
import { addDoc, collection } from "firebase/firestore";

function NewMeetups(){
   async function Submithandler(data){
        const id=auth.currentUser.uid;
        try{
           await addDoc(collection(db,'events'),{
             ...data,
             id:id,
           })
        }
        catch{

        }
    }
return(    
   <>
<Layout></Layout>
    
<NewMeetupform onadd={Submithandler}/>

</> 
)
}

export default NewMeetups;