import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.css'; 

const ImageGalleryItem = ({ src, alt }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img src={src} alt={alt} className={styles.ImageGalleryItem_image} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
