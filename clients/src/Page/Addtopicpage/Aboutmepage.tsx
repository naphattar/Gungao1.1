import Form from "./components/Uploadform";
import { addtopicpagebody , abouttext} from "./styles";

function Addtopicpage(){
    return(
        <div style={addtopicpagebody}>
            <Form/>
            <p style={abouttext}>Not done haha</p>
        </div>
    )
}

export default Addtopicpage;