import React from 'react'

const Answer = ({text}) => {
  return (
    <blockquote className='answer'>
      <h3>{text}</h3>
    </blockquote>
  )
}



export default Answer;