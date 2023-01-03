import React from "react";
import { Link } from "react-router-dom";

interface Navlist{
    item : string;
    tolink : string;

}
function Navitem(list : Navlist){
    return(
        <li className="navitem">
            <Link to={list.tolink} className="navlink">{list.item}</Link>
        </li>
    );
}

export default Navitem;