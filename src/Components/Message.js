import React from 'react'
import '../stylesheets/message.css';

function Message({ timestamp, message, user, userImage }) {
    return (
        <div className='message'>
            <img src={userImage}/>
            <div className="message__info">
                <h4>{user} <span className='message__timestamp'>{new Date(timestamp?.toDate()).toString()}</span> </h4>
                <p>{message}</p>
            </div>
        </div>
    )
}

export default Message;