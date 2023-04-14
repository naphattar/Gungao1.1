import axios from "axios";

const API_URL : string = "http://localhost:4000/topic/create";

interface topicData{
    topicname : string , 
    imageurl : string,
}

function convertToBase64(file: File): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result as string);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  }
  

function addTopic(topic : topicData) : any{
    return axios.post(API_URL, topic)
    .then((response : any) =>{
        console.log(response.data.message);
    })
    .catch((err) =>{
      console.log(err);
    })
}
  export const FileUploadService = {
    convertToBase64,
    addTopic,
  };
  