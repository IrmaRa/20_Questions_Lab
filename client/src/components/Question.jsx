import React from 'react'

const Question = ({text}) => {
  return (
    <blockquote className='question'>
      <h3>{text}</h3>
    </blockquote>
  )
}



export default Question;