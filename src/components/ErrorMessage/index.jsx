import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidV4 } from 'uuid';
import './index.css';

const ErrorMessage = ({ message, className }) => {
  const classNames = `error ${className}`;
  return Array.isArray(message) ? (
    <ul role="alert" className={classNames}>
      {message.map((msg) => {
        return <li key={`errorMsg-${uuidV4()}`}>{msg}</li>;
      })}
    </ul>
  ) : (
    <p role="alert" className={classNames}>
      <strong>{message}</strong>
    </p>
  );
};

ErrorMessage.defaultProps = {
  className: '',
};

ErrorMessage.propTypes = {
  message: PropTypes.oneOfType([PropTypes.array, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

export default ErrorMessage;
