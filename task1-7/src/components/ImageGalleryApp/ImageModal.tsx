import React from 'react';
import { ModalState } from '../../types/ImageGallery'
import { Module } from 'module';

interface ModalStateClose extends ModalState {
  closeImage: () => void;
  changeImage: (direction: 'prev' | 'next') => void;
}

const ImageModal: React.FC<ModalStateClose> = ({isShow, imageData, closeImage, changeImage }) => {

  return isShow ? (
    <div>
      <div className='model show'>
        <button className='prev-btn' onClick={() => changeImage('prev')}>＜</button>
        <div className='modal-window'>
          <div className='modal-contents'>
            <button className='close-btn' onClick={closeImage}>×</button>
            <img className='modal-main-img' src={imageData?.src} alt={imageData?.title} />
            <ul className='modal-img-detail'>
              <li className='modal-img-detail-item'>
                <h3>タイトル</h3>
                <p>{imageData?.title}</p>
              </li>
              <li className='modal-img-detail-item'>
                <h3>写真について</h3>
                <p>{imageData?.text}</p>
              </li>
            </ul>
          </div>
        </div>
        <button className='next-btn' onClick={() => changeImage('next')}>＞</button>
        <div className='overlay' onClick={closeImage}></div>
      </div>
    </div>
  ) : null;
}

export default ImageModal
