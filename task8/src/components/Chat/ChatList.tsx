import React from 'react';
import './Chat.css';

const ChatList: React.FC = () => {
  return (
      <ul className='chat-list'>
        <li className='chat-list-item'>
          <div>
            <p className='frend-name'>花子</p>
            <p className='newest-message'>おはよう！！</p>
          </div>
        </li>
        <li className='chat-list-item'>
          <div>
            <p className='frend-name'>太郎</p>
            <p className='newest-message'>やっほ～</p>
          </div>
        </li>
        <li className='chat-list-item'>
          <div>
            <p className='frend-name'>田中</p>
            <p className='newest-message'>おやすみ。</p>
          </div>
        </li>
      </ul>
  )
}

export default ChatList
