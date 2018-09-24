import React from 'react';

const Button = ({ onClick, label, value }) => (
  <div
    onClick={onClick}
    className="button"
  >
    {label}
  </div>
);

export default Button;
