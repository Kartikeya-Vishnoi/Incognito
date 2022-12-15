import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth,db } from '../../FireBase';
import { addDoc,collection,doc,serverTimestamp,setDoc } from 'firebase/firestore';
import EntrepreneurForm from './EntrepreneurForm';

function SignUp(){
const navigate=useNavigate();
async function Onsubmithandler(data){
try{
    const res=await createUserWithEmailAndPassword(auth,data.UserEmail,data.Password);
    await setDoc(doc(db,"users",res.user.uid),{
        ...data,
        timestamp:serverTimestamp(),
        uid:res.user.uid
    }).then(
        await setDoc(doc(db,"userChats",res.user.uid), {}),
        navigate("/")
    )
    
}
catch(err){
    console.log(err);
}
}    
    
return(
    <EntrepreneurForm onadd={Onsubmithandler}/>
)
}
export default SignUp;