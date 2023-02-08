import starFull from "../../assets/imgs/star-full.svg";
import starHalf from "../../assets/imgs/star-half.svg";
import starEmpty from "../../assets/imgs/star-empty.svg";

import "./style.css";

function index() {
    return (
        <div className="dsmovie-stars-container">
            <img src={starFull} />
            <img src={starFull} />
            <img src={starFull} />    
            <img src={starHalf} />  
            <img src={starEmpty} />  
        </div>
    )
}

export default index