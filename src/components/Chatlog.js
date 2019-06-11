import React from 'react'
import Message from './Message'
// import '../App.css'

const Chatlog = (props) => {

    const allMessages = props.messagingInfo.map((message, i) => {
        return (
            <div className={`chat-entry ${message.sender === "Vladimir" ? "local" : "remote"}`} key={i}>
              <Message sender={message.sender} body={message.body} time={message.timeStamp}/>
            </div>
        )
    })

    return (  
        <div className='chat-log'>
            {allMessages} 
        </div>
    ) ;
};

export default Chatlog