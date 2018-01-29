import React from 'react';
import PropTypes from 'prop-types';
import styles from './message.css';

const Message = ({ size, type, children }) => (
  <section className={`${styles.message} ${styles[size]} ${styles[type]}`}>
    <span>{children}</span>
  </section>
);

Message.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
};

Message.defaultProps = {
  type: 'success',
  size: 'm',
};

export default Message;
