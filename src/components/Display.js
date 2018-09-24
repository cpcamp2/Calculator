import React from 'react';

const Display = ({ info }) => (
  <div className="display">
    {info.join('')}
  </div>
);

export default Display;
