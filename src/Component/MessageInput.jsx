import React, {useState} from 'react'
import { msgData } from '../Data'
import "../App.css";

function MessageInput() {
    const [msg, setMsg]= useState("")

    async function messageInput(e){
        e.preventDefault()
        
            
       
        setMsg("")
       
    }
    return (
        <div>
            <form onSubmit={messageInput} classname="form">
                <input classname="frm" value={msg} onChange={(e) => setMsg(e.target.value)} type="text" placeholder="Message"/>
                <input type="submit" value="Submit"/>
            </form>
            
        </div>
    )
}

export default MessageInput


