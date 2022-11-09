import React from 'react';
import './Button.css';

function Button(props) {
  let buttonName = props.variant;
  return (
    <button type="button" className={`${buttonName}`} onClick={props.onClick ? props.onClick : ''} title={props.title ? props.title : '' }>
    {props.children}
    </button>
  )
}

export default Button;