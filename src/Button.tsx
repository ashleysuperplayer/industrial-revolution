import React from 'react'

interface buttonProps {
    className: string;
    onClick: any; //function
    purpose: string;
}

function Button(props: buttonProps) {
    return (
      <button className={props.className} onClick={props.onClick}>
        {props.purpose}
      </button>
    )
  }