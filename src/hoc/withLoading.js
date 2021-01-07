import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../components/Spinner';

const WithLoading = (Component) => {
  const wrapped = ({ isLoading, ...rest }) => (isLoading ? <Spinner /> : <Component {...rest} />);
  wrapped.propTypes = {
    isLoading: PropTypes.bool.isRequired,
  };
  return wrapped;
};

WithLoading.propTypes = {
  Component: PropTypes.element,
};

export default WithLoading;
