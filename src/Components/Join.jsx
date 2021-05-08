import React, { useState } from "react"
import {Link} from "react-router-dom"

import "./Join.css"

function Join(){
const [name,setName]=useState("")
const [room,setRoom]=useState("")

    return(
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
          <h1 className="heading">Join</h1>
          <div><input placeholder="Name" className="joinInput" type="text" onChange={(event)=>setName(event.target.value)}/></div>
          <div><input placeholder="Room" className="joinInput" type="text" onChange={(event)=>setRoom(event.target.value)}/></div>
          <Link onClick={event=>!room || !name?event.preventDefault():null} to={`/chat?name=${name}&room=${room}`}>
              <button type="submit" className="button mt-20">Sign In</button>
          </Link>
          
            </div>
        </div>
    )
}

export default Join