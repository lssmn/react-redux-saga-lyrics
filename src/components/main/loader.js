import React from 'react';
import styles from './loader.css';

export const Loader = () => (
  <div className={styles.loader}>
    <div className={styles.spinner} />
  </div>
);

export default Loader;
