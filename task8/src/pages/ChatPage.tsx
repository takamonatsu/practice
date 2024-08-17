import React from 'react';
import ChatList from '../components/Chat/ChatList';
import ChatFrom from '../components/Chat/ChatFrom';
import Header from '../components/Header/Header';

const ChatPage: React.FC = () => {
    return (
        <div>
            <Header />
            <div className='chat-container'>
                <div className='chat-inner'>
                    <ChatList />
                    <ChatFrom />
                </div>
            </div>
        </div>
    )
}

export default ChatPage
