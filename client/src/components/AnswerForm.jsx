import React from 'react';

const AnswerForm = ({onSubmit, ansKeyUp, ans}) => {

  return (
    <div>
      <h2>Choose your celebrity!</h2>
      <form onSubmit={onSubmit}>
        <input type="text" onKeyUp={ ansKeyUp } placeholder="Enter your answer" />
        <input type="submit" name="submit" value="Send Answer" />
      </form>
    </div>
  )
}


export default AnswerForm;