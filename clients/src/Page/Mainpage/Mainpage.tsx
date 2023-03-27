import React from "react";
import Homepage from "../Homepage/Homepage";
import Selectpage from "../Selectpage/Selectpage";
import Topicpage from "../Topicpage/Topicpage";

function Mainpage(){
    return(
        <div>
            <Homepage/>
            <Topicpage/>
            <Selectpage/>
        </div>
    );
}
export default Mainpage;