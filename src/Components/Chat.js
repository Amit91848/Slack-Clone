import React, { useEffect, useState } from 'react';
import '../stylesheets/chat.css';
import { useParams } from 'react-router-dom';
import StarBorderOutLined from '@material-ui/icons/StarBorderOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from '../firebase';
import Message from './Message';
import ChatInput from './ChatInput';

function Chat() {
    const { roomid } = useParams();
    const [roomDetails, setRoomDetails] = useState(null);
    const [roomMessages, setRoomMessages] = useState(null);

    useEffect(() => {
        if(roomid) {
            db
            .collection('rooms')
            .doc(roomid)
            .onSnapshot((snapshot) => {
                setRoomDetails(snapshot.data());
            })
        }

        db.collection('rooms')
          .doc(roomid)
          .collection('messages')
          .orderBy('timestamp', 'asc')
          .onSnapshot(snapshot => {
            setRoomMessages(
                snapshot.docs.map(doc => doc.data())
            )
        })
    }, [roomid]);

    return (
        <div className='chat'>
            <h2>You are in room {roomid}</h2>
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderOutLined/>
                    </h4>
                </div>

                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon/> Details
                    </p>
                </div>
            </div>

            <div className="chat__messages">
            {roomMessages?.map(({ message, user, timestamp, userImage }) => (
                <Message
                    message={message}
                    user={user}
                    userImage={userImage}
                    timestamp={timestamp}
                />
            ))}
            </div>

            <ChatInput channelName={roomDetails?.name} channelId={roomid}/>
        </div>
    )
}

export default Chat
