import React, { useState } from 'react';
import '../stylesheets/chatinput.css';
import { Button } from '@material-ui/core';
import db from '../firebase';
import { useStateValue } from '../stateProvider';
import firebase from 'firebase/compat/app';

function ChatInput({channelName, channelId}) {
    const [input, setInput] = useState("");
    const [{user}] = useStateValue();
    const sendMessage = e => {
        e.preventDefault();

        if(channelId) {
            db
            .collection('rooms')
            .doc(channelId)
            .collection('messages')
            .add({
                message: input,
                user: user.displayName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                userImage: user.photoURL
            })
        }
        
        setInput("");
    }

    return (
        <div className='chatInput'>
            <form>
                <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder={`Message ${channelName}`}/>
                <Button type="submit" onClick={sendMessage}>Send</Button>
            </form>
        </div>
    )
}

export default ChatInput
