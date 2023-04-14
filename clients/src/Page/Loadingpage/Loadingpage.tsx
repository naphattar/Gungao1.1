import { useRef } from "react";
import { Loadingpagebody, LoadingtextLarge , LoadingtextSmall } from "./styles";

function Loadingpage(){
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    const windowWidth = windowSize.current[0];
    return(
        <div style={Loadingpagebody} >
            <p style={windowWidth> 992 ? LoadingtextLarge : LoadingtextSmall}>Loading ...</p>
        </div>
    )
}
export default Loadingpage;