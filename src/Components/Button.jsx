import React from 'react'


const Button = (props) => {
  return (
    <div>
      <button className = {props.className} style={props.style}>{props.name}</button>
    </div>
  )
}

export default Button
