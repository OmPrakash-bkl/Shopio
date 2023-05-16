import React from 'react';
import './Button.css';

function Button(props) {
  let buttonName = props.variant;
  return (
    <button type="button" className={`${buttonName} commonBtn`} onClick={props.onClick ? props.onClick : null } title={props.title ? props.title : '' }>
    {props.children}
    </button>
  )
}

export default Button;