import React, { forwardRef } from 'react';

//This component is for custom input inside the react-datepicker component
//eslint-disable-next-line
export const datePickerCustomInput = ({ className = '', value, onClick, placeholder }, _ref) => (
  <button className={`btn btn-info btn-custom-input ${className}`} onClick={onClick}>
    {value || placeholder}
  </button>
);

export default forwardRef(datePickerCustomInput);
