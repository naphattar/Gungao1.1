import axios from "axios";

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

// increase the topicused by +1
const increaseTopicUsed = (topicroomid : number) =>{
  try{
    return axios.patch(API_URL+"increase",{
      topicroomid : topicroomid
    });
  }catch(err: any){
    throw Error(err.response);
  }
}

const TopicService= {
    getsortedTopics,
    increaseTopicUsed
}
  
export default TopicService;