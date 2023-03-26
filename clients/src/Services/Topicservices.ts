import axios from "axios";
import { Topic } from "../Types/Topic";
const API_URL : string = "http://localhost:4000/topic/";


const getsortedTopics = async () => {
  try{
    const response = await axios.get(API_URL)
    if(response.data){
      return response.data;
    }

  }catch(err : any){
    throw Error(err.response);
  }
};

const TopicService= {
    getsortedTopics
}
  
export default TopicService;