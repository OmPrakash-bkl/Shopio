import React from 'react';
import './Button.css';

function Button(props) {
  let buttonName = props.variant;
  return (
    <button className={`${buttonName}`}>
    {props.children}
    </button>
  )
}

export default Button;