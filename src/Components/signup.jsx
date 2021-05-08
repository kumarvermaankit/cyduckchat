import React, { useState } from "react"
import axios from "axios"

 function SignUp(){

const [infostate,setinfo]=useState({
    email:"",
    username:"",
    password:""
})

function Change(event){
event.preventDefault()

const {name,value}=event.target;


setinfo((prevvalue)=>{
    return{
        ...prevvalue,
        [name]:value
    }
})
}

console.log(infostate)

  function sendInfo(event){

 
    event.preventDefault();

 axios.post("http://localhost:5000/logup",{info:infostate,h:"hello"})
.then((res)=>{
    console.log(res)
})
.catch(err=>console.log(err))

}

return(
    <div>
    <form onSubmit={(event)=>sendInfo(event)}>
        <input type="text" onChange={(event)=>Change(event)} name="email" value={infostate.email} placeholder="Email" required={true}/>
        <input type="text" onChange={(event)=>Change(event)} name="username" value={infostate.username} placeholder="Username" required={true}/>
        <input type="password" onChange={(event)=>Change(event)} name="password" value={infostate.password} placeholder="Password" required={true}/>
        <button type="submit" >Submit</button>
        </form>

    </div>
)
}

export default SignUp;