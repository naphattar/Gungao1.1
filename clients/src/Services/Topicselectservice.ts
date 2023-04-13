import TopicService from "./Topicservices";

function navigate(additionalPath: string): void {
    const currentPath = window.location.pathname;
    const newPath = currentPath + additionalPath;
    window.location.href = window.location.origin + newPath;
  }

const increaseTopic = async (roomid : number) =>{
    await TopicService.increaseTopicUsed(roomid);
};

const findChat = (roomid : number) =>{
    
    if(roomid !== 0){
        const chaturl : string = `/chat/${roomid}`;
        increaseTopic(roomid);
        navigate(chaturl);
        window.location.reload();
    }else{
        navigate("/error");
        window.location.reload();
    }
};

export const Topicselectservice = {
    increaseTopic,
    findChat,
};