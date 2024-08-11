import React from 'react';
import { ModalStateProps } from '../../types/Modal';

interface ShowModalPropsWithClose extends ModalStateProps {
  closeModal: () => void;
}

const ShowModal: React.FC<ShowModalPropsWithClose> = ({ isShow, taskDetails, closeModal }) => {
  return (
    <div className={`modal ${isShow ? 'show':''}`}>
      <div className='modal-window'>
        <div className='modal-contents'>
          <button className='close-btn' onClick={closeModal}>×</button>
          <ul className='task-list'>
              <li className='task-list-item'>
                  <h3>課題</h3>
                  <p>{taskDetails?.name}</p>
              </li>
              <li className='task-list-item'>
                  <h3>内容</h3>
                  <p>{taskDetails?.content}</p>
              </li>
              <li className='task-list-item'>
                  <h3>目標</h3>
                  <p>{taskDetails?.target}</p>
              </li>
          </ul>
        </div>
      </div>
      <div className='overlay' onClick={closeModal}></div>
    </div>
  )
}

export default ShowModal
