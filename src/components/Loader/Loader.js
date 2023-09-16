import React from 'react';
import PropTypes from 'prop-types';
import styles from './Loader.module.css';

const Loader = ({ visible, height, width, ariaLabel, wrapperClass, wrapperStyle }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className={`${styles.LoaderWrapper} ${wrapperClass}`} style={wrapperStyle}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width={width}
        height={height}
        aria-label={ariaLabel}
        role="img"
        className={styles.Loader}
      >
        <circle cx="50" cy="50" r="45" />
      </svg>
    </div>
  );
};

Loader.propTypes = {
  visible: PropTypes.bool.isRequired,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ariaLabel: PropTypes.string,
  wrapperClass: PropTypes.string,
  wrapperStyle: PropTypes.object,
};

Loader.defaultProps = {
  height: 80,
  width: 80,
  ariaLabel: 'Loader',
  wrapperClass: '',
  wrapperStyle: {},
};

export default Loader;

