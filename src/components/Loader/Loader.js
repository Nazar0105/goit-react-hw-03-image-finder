
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Loader.module.css';

const Loader = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className={styles.LoaderWrapper}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        aria-label="Loader"
        role="img"
        className={styles.Loader}
      >
        <circle cx="50" cy="50" r="45" className={styles.circle1} />
        <circle cx="50" cy="50" r="35" className={styles.circle2} />
        <circle cx="50" cy="50" r="25" className={styles.circle3} />
        <circle cx="50" cy="50" r="15" className={styles.circle4} />
      </svg>
    </div>
  );
};

Loader.propTypes = {
  visible: PropTypes.bool.isRequired,
};

export default Loader;


