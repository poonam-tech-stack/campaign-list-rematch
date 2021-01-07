import React from 'react';

const Spinner = () => (
  <div className="spinner-border text-primary" role="status">
    <span className="sr-only">Loading...</span>{' '}
    {/* For accessibility purpose, loader includes role="status" and a nested <span class="sr-only">Loading...</span> */}
  </div>
);

export default Spinner;
