import React, { useEffect, useState } from "react"
import queryString from "query-string"
import io from "socket.io-client"
import InfoBar from "./infoBar"
import Input from "./Input"
import Messages from "./Messages"

let socket;

function Chat({location}){

    const ENDPOINT="https://cyduckchat.herokuapp.com/";

    const [name,setName]=useState("")
    const [room,setRoom]=useState("")
    const [message,setmessage]=useState("")
    const [messages,setmessages]=useState([])

useEffect(()=>{
    const {name,room}=queryString.parse(location.search)

    socket=io(ENDPOINT)

    
    setName(name)
    setRoom(room)
   
socket.emit("join",{name,room},()=>{
   
})

return ()=>{
    // socket.emit("disconnect");
    socket.off();
}


},[ENDPOINT,location.search])

useEffect(()=>{
    socket.on("message",(message)=>{
        setmessages([...messages,message])
    })
},[messages])

function sendMessage(event){
event.preventDefault();


if(message){
    socket.emit("sendMessage",message)
    setmessage("")
}
}





    return(
        <div className="outerContainer">
        <div className="container">
        <InfoBar room={room}/>
        <div className="message_box">
        <Messages messages={messages} name={name}/>
        <Input message={message} setmessage={setmessage} sendMessage={sendMessage}/> 
        </div>
        </div>
        </div>
    )
}

export default Chat