import React from 'react';
import ChatList from '../components/Chat/ChatList';
import ChatFrom from '../components/Chat/ChatFrom';

const ChatPage: React.FC = () => {
    return (
        <div className='chat-container'>
            <div className='chat-inner'>
                <ChatList />
                <ChatFrom />
            </div>
        </div>
    )
}

export default ChatPage
