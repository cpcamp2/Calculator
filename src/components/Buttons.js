import React from 'react';
import Button from './Button';

const Buttons = ({ onClick }) => (
  <div>
    <Button onClick={onClick} label="C" value="clear" />
    <Button onClick={onClick} label="7" value="7" />
    <Button onClick={onClick} label="4" value="4" />
    <Button onClick={onClick} label="1" value="1" />
    <Button onClick={onClick} label="0" value="0" />
    <Button onClick={onClick} label="/" value="/" />
    <Button onClick={onClick} label="8" value="8" />
    <Button onClick={onClick} label="5" value="5" />
    <Button onClick={onClick} label="2" value="2" />
    <Button onClick={onClick} label="." value="." />
    <Button onClick={onClick} label="x" value="*" />
    <Button onClick={onClick} label="9" value="9" />
    <Button onClick={onClick} label="3" value="3" />
    <Button label="null" value="null" />
    <Button onClick={onClick} label="-" value="-" />
    <Button onClick={onClick} label="+" value="+" />
    <Button onClick={onClick} label="=" value="equal" />
  </div>
);

export default Buttons;
