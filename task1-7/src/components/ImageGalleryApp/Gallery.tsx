import React from 'react';
import { ImageData } from '../../types/ImageGallery';

interface GalleryProps {
    images: ImageData[];
    openImage: (image: ImageData) => void;
}

const Gallery: React.FC<GalleryProps> = ({images, openImage}) => {
    return (
        <div>
            <ul className='img-list'>
                {images.map((image) => (
                    <li className='img-list-item' key={image.imageId} onClick={() => openImage(image)}>
                        <img className='img' src={image.src} alt={image.title} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Gallery
