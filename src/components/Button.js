import React from 'react';

const Button = ({ onClick, label, value, size }) => (
  <div
    className="button"
    onClick={onClick}
    size={size}
    value={value}
  >
    {label}
  </div>
);

export default Button;
