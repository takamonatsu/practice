import React from 'react';

const ChatFrom: React.FC = () => {
  return (
    <div className='chat-area'>
      <div className='chat-message'>
        <ul className='message-list'>
          <li className='message-list-item frend'>
            <p className='message'>hoge01</p>
          </li>
          <li className='message-list-item frend'>
            <p className='message'>hoge02</p>
          </li>
          <li className='message-list-item mine'>
            <p className='message'>hoge03</p>
          </li>
          <li className='message-list-item frend'>
            <p className='message'>hoge04</p>
          </li>
          <li className='message-list-item mine'>
            <p className='message'>hoge05</p>
          </li>
          <li className='message-list-item mine'>
            <p className='message'>hoge05</p>
          </li>
          <li className='message-list-item mine'>
            <p className='message'>hoge05</p>
          </li>
          <li className='message-list-item frend'>
            <p className='message'>hoge06</p>
          </li>
          <li className='message-list-item frend'>
            <p className='message'>hoge01</p>
          </li>
          <li className='message-list-item frend'>
            <p className='message'>hoge02</p>
          </li>
          <li className='message-list-item mine'>
            <p className='message'>hoge03</p>
          </li>
          <li className='message-list-item frend'>
            <p className='message'>hoge04</p>
          </li>
          <li className='message-list-item mine'>
            <p className='message'>hoge05</p>
          </li>
          <li className='message-list-item frend'>
            <p className='message'>hoge06</p>
          </li>
          <li className='message-list-item frend'>
            <p className='message'>hoge01</p>
          </li>
          <li className='message-list-item frend'>
            <p className='message'>hoge02</p>
          </li>
          <li className='message-list-item mine'>
            <p className='message'>hoge03</p>
          </li>
          <li className='message-list-item frend'>
            <p className='message'>hoge04</p>
          </li>
          <li className='message-list-item mine'>
            <p className='message'>hoge05</p>
          </li>
          <li className='message-list-item frend'>
            <p className='message'>hoge06</p>
          </li>
        </ul>
      </div>
      <form action="" className='chat-from'>
        <textarea name="" id="" className='chat-input' placeholder='メッセージを入力してください'></textarea>
        <button className='chat-btn'>送信</button>
      </form>
    </div>
  )
}

export default ChatFrom
