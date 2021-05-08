import React from "react"
import "./infoBar.css"
import onlineIcon from './icons/onlineIcon.png'
import closeIcon from "./icons/socketicon1.png"


function InfoBar(props){
    return(
    <div className="infoBar">
<div className="leftInnerContainer">
<img className="onlineIcon" src={onlineIcon} alt="online-image"/>
<h3>{props.room}</h3>
</div>
<div className="rightInnerContainer">
<a href="/"><img src={closeIcon} alt="close-image"/></a>
</div>
    </div>
    )
}

export default InfoBar