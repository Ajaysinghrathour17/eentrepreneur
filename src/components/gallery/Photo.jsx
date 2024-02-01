import React from 'react'

const Photo = (props) => {
  return (
    <div className='mr-2'>
        <img src={props.img} alt={props.alt} />
    </div>
  )
}

export default Photo