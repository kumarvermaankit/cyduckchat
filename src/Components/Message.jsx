import React, { useState } from "react"

import "./Message.css"
import ReactEmoji from "react-emoji"

function Message(props){

let isCurrentUser=false

    const trimmedName=props.name.trim().toLowerCase();
    if(trimmedName===props.message.user){
isCurrentUser=true
    }




    return(
        <div >
{isCurrentUser?<div className="messageContainer justifyEnd">
<p className="sentText pr-10">{trimmedName}</p>
<div className="messageBox backgroundBlue">
<p className="messageText colorWhite">{ReactEmoji.emojify(props.message.text)}</p>
</div>
</div>:
<div className="messageContainer justifyStart">
<div className="messageBox backgroundLight">
<p className="messageText colorDark">{ReactEmoji.emojify(props.message.text)}</p>
</div> 
<p className="sentText pl-10">{props.message.user}</p>
</div>
}


</div>
    )
}
export default Message