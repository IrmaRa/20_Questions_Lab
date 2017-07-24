import React from 'react';

const QuestionForm = ({onSubmit, qstKeyUp, qst}) => {

  return (
    <div>
      <h2>You are the guesser</h2>
      <form onSubmit={onSubmit}>
        <input type="text" onKeyUp={ qstKeyUp } placeholder="Enter your question" />
        <input type="submit" name="submit" value="Send Question" />
      </form>
    </div>
  )
}


export default QuestionForm;

