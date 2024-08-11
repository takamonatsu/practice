import React, { useState } from 'react';
import ImageModal from './ImageModal';
import Gallery from './Gallery';
import { images } from '../../data/Image'
import { ImageData, ModalState } from '../../types/ImageGallery';
import './ImageGalleryApp.css';

const ImageGalleryApp: React.FC = () => {
    const [imageState, setImageState] = useState<ModalState>({
        isShow: false,
        imageData: null
    });
    const openImage = (image: ImageData) => {
        setImageState({ isShow: true, imageData: image });
    };
    const closeImage = () => {
        setImageState({...imageState, isShow: false});
    }
    const changeImage = (direction: 'prev' | 'next') => {
        if(!imageState.imageData) return;
        const currentIndex = images.findIndex((image) => image.imageId === imageState.imageData!.imageId);
        const nextIndex = direction === 'next' ? (currentIndex + 1) % images.length : (currentIndex - 1 + images.length) % images.length;
        const newImage = images[nextIndex];
        setImageState({...imageState, imageData: newImage });
    }

    return (
        <div className='image-gallery-app'>
            <h2>画像ギャラリー</h2>
            <Gallery images={images} openImage={openImage} />
            <ImageModal {...imageState} closeImage={closeImage} changeImage={changeImage} />
        </div>
    )
}

export default ImageGalleryApp
