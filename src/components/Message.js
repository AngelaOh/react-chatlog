import React from 'react'
import Timestamp from './Timestamp'
// import '../App.css'


const Message = (props) => {

    const timeDisplay = <Timestamp time={props.time}/>

    return (
   
        <div>
            <h1 className='entry-name'>{props.sender}</h1>
            <div className='entry-bubble'>
              <p className='entry-body'>{props.body}</p>
              <p className='entry-time'>{timeDisplay}</p>
            </div>
        </div>

    );
};

export default Message 