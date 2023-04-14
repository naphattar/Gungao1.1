import { useState } from "react";
import "./styles.css";
import { FileUploadService } from "../../../Services/Fileuploadservice";
function Form(){
    const [topicData,setTopicdata] = useState({topicname : "" , imageurl : "" });

    const handleTopicnamechange =(e : any) =>{
        setTopicdata({...topicData , topicname : e.target.value})
    }

    const handleFilechange = async  (e : any) =>{
        e.preventDefault();
        if(e.target.files){
           const file = e.target.files[0];
           const base64 = await FileUploadService.convertToBase64(file);
           setTopicdata({ ...topicData, imageurl : base64 })
        }
    }

    const handleFilesubmit = async(e : any) =>{
        e.preventDefault();
        console.log(topicData);
        await FileUploadService.addTopic(topicData);
    }
    return(
        <div className="pagebody">
           <div className="formcontainer">
               <div className="questioncontainer">
               <h1>Add Your Own topic</h1>
                   <form className="uploadform">
                       <input   
                        type="text" 
                        placeholder="Your Topic name" 
                        onChange = {handleTopicnamechange}
                        ></input>
                       <input 
                       type="file" 
                       placeholder="Upload Files here " 
                       className="custom-file-input"
                       onChange = {handleFilechange}
                       ></input>
                       <button onClick={handleFilesubmit}>Send Files</button>
                   </form>
               </div>
           </div>
       </div>
    );
}

export default Form;