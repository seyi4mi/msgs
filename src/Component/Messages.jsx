import React, {useState, useEffect} from 'react'
import "../App.css";
import {msgData} from "../Data"

function Messages(){
    const [message, setMessage]= useState([])
    
    
    return(
      <>
      <div className="msgs-container">
      {msgData.map((data, key) =>{
          return(
            <div key={key}>
                <p>{data.Sender.Name}</p>
                <h4>{data.Content}</h4>
                </div>
          )
      })}
     
      </div>

      </>
    )
   
    

}

export default Messages
