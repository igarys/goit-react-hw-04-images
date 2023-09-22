import { useEffect } from 'react';
import css from './Modal.module.css';

export const Modal = ({handleKeyDown, handleClick, largeImageURL, alt}) => {
 
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [handleKeyDown]);

    return (
      <div>
        <div className={css.Overlay}>
          <div
            className={css.Modal}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
          >
            <img src={largeImageURL} alt={alt} />
          </div>
        </div>
      </div>
    );
  }

