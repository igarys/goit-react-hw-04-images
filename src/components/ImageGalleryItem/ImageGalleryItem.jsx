import { Modal } from 'components/Modal';
import { useState } from 'react';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({image}) =>  {

  const [isOpen, setIsOpen] = useState(false)

  const  handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (evt) => {
    if (evt.key === 'Escape') {
      setIsOpen(!isOpen);
    }
  }
  // message = () => `Sorry... There is no ${this.value} images :(`;

    return (
      <li key={image.id} className={css.ImageGalleryItem}>
        <img
          className={css.ImageGalleryItemImage}
          src={image.webformatURL}
          alt={image.tags}
          onClick={handleClick}
        />
        {isOpen && (
          <Modal
            largeImageURL={image.largeImageURL}
            alt={image.tags}
            handleClick={handleClick}
            handleKeyDown={handleKeyDown}
          />
        )}
      </li>
    )
  }
