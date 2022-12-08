import { useState } from "react";
import { storage } from "../FireBase";
import {ref, uploadBytes} from "firebase/storage"
function Upload() {
  const[imgupload,Setimgupload]=useState(null)  
  function uploadimg() {
    if(imgupload==null) return;
    const imgref=ref(storage,`/images`);
    uploadBytes(imgref,imgupload).then(() => {alert("image uploaded")});
  }

  return (
    <>
      <input type="file" onChange={(e) => Setimgupload(e.target.files[0])}/>

      <button onClick={uploadimg}>upload</button>
    </>
  );
}

export default Upload;
