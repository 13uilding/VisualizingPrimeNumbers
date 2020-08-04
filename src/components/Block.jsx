import React from 'react';

// Up to 100
const Block = (props) => {
  return (
    <div className={`block color-${props.color}`}>
      <p>{props.number}</p>
    </div>
  )
}

export default Block;