import { ExampleTopic } from "../ExampleTopic";
import { imagecontainer, textcontainer, Topicpresentcontainer, imagestyle } from "./styles";

interface TopicPresentprops{
    data : ExampleTopic
}

function TopicPresent(props : TopicPresentprops){
    return(
        <div style={Topicpresentcontainer}>
            <div style={textcontainer}>
                <p>{props.data.topicname}</p>
            </div>
                <div style={imagecontainer}>
                    <img style={imagestyle} src={props.data.topicimageurl}></img>
                </div>
        </div>
    )
};

export default TopicPresent;