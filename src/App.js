import './App.css';
import React from 'react';
import Header from './Component/Header';
import Messages from './Component/Messages';
import MessageInput from './Component/MessageInput';



function App() {
    return(
        <>
        <div className="App">
        <Header />
        <Messages />
        <MessageInput />
        </div>
     </>
    )
}

export default App
