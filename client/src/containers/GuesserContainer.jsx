import React from 'react'
import Question from '../components/Question'
import QuestionForm from '../components/QuestionForm'
import io from 'socket.io-client'

class GuesserContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      qst: null,
      questions: [],
      question: ""
    }

    this.socket = io();
    this.socket.on("chat", this.addQuestion.bind(this));

    this.qstKeyUp = this.qstKeyUp.bind(this);
    this.submitQuestion = this.submitQuestion.bind(this);
  }

  addQuestion(question) {
    var questions = this.state.questions;

    var newQuestions = [question, ...questions]
    this.setState({questions: newQuestions})
  }

  qstKeyUp(event) {
    this.setState({
      question: event.target.value
    })
  } 

  submitQuestion(event) {
    event.preventDefault();

    if(this.state.question) {
      let newQuestion = {text: this.state.question};

      this.socket.emit('chat', newQuestion);
    }
  }

  render() {
    const questions = this.state.questions.map((question, index) => {
      return <Question key={index} text={question.text} />
    })

    return (
      <div>
        <QuestionForm 
          qstKeyUp={this.qstKeyUp}
          onSubmit={this.submitQuestion}
        />
        {questions}
      </div>
      
    )
  }

}

export default GuesserContainer