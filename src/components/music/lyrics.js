import React from 'react';
import PropTypes from 'prop-types';
import styles from './lyrics.css';

const Lyrics = ({ children }) => (
  <div className={styles.container}>
    <p className={styles.lyrics}>{children}</p>
  </div>
);

export default Lyrics;
