import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { errorbutton, errorpagebody, errortext } from "./styles";
function Errorpage(){
    const[error,setError] = useState<string>("Something not's working ... make sure You select the topics and login");
    const navigate = useNavigate();

    const backToHome = () =>{
        navigate("/");
    }
    return(
        <div style={errorpagebody}>
            <h1 style={errortext}>{error}</h1>
            <button style={errorbutton} onClick={backToHome}>Back to Home</button>
        </div>
    )
}

export default Errorpage;