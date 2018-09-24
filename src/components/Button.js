import React from 'react';

const Button = ({ onClick, label, value }) => (
  <div
    className="button"
    onClick={onClick}
    value={value}
  >
    {label}
  </div>
);

export default Button;
