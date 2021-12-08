import React from 'react'

interface buttonProps {
    className: string;
    onClick: any; //function
    text: string;
}

function Button(props: buttonProps) {
    return (
      <button className={props.className} onClick={props.onClick}>
        {props.text}
      </button>
    )
  }

export default Button;