import React, { useState, useEffect } from 'react';
import '../stylesheets/sidebar.css';
import SidebarOption from './SidebarOption';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import AddIcon from '@material-ui/icons/Add';
import db from '../firebase';
import { useStateValue } from '../stateProvider';

function Sidebar() {
    const [channels, setChannels] = useState([]);
    const [{user}] = useStateValue();

    useEffect(() => {
        db
            .collection('rooms')
            .onSnapshot((snapshot) => {
                setChannels(
                    snapshot.docs.map(doc => ({
                        id: doc.id,
                        name: doc.data().name
                    }))
                );
            });
    }, []);

    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>{user?.displayName}</h2>
                    <h3>
                        <FiberManualRecordIcon/>
                    </h3>
                </div>
                <CreateIcon />
                
            </div>
            <SidebarOption Icon={InsertCommentIcon} title="Threads" />
            <SidebarOption Icon={InboxIcon} title="Mentions & Reactions"/>
            <SidebarOption Icon={DraftsIcon} title="Saved Items" />
            <SidebarOption Icon={BookmarkBorderIcon} title="Channel Browser" />
            <SidebarOption Icon={PeopleAltIcon} title="People & User groups"/>
            <SidebarOption Icon={AppsIcon} title="Apps"/>
            <SidebarOption Icon={FileCopyIcon} title="File Browser" /> 
            <hr />
            <SidebarOption Icon={ExpandLessIcon} title="Show Less"/>
            <hr />
            <SidebarOption Icon={AddIcon} addChannelOption title="Add Channel"/>
            {
                channels.map(channel => (
                    <SidebarOption id={channel.id} title={channel.name}/>
                ))
            }
        </div>
    )
}

export default Sidebar
