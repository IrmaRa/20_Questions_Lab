import React from 'react'
import Answer from '../components/Answer'
import AnswerForm from '../components/AnswerForm'
import io from 'socket.io-client'

class ChooserContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      ans: null,
      answers: [],
      answer: ""
    }

    this.socket = io();
    this.socket.on("chat", this.addAnswer.bind(this));

    this.ansKeyUp = this.ansKeyUp.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
  }

  addAnswer(answer) {
    var answers = this.state.answers;

    var newAnswers = [answer, ...answers]
    this.setState({answers: newAnswers})
  }

  ansKeyUp(event) {
    this.setState({
      answer: event.target.value
    })
  } 

  submitAnswer(event) {
    event.preventDefault();

    if(this.state.answer) {
      let newAnswer = {text: this.state.answer};

      this.socket.emit('chat', newAnswer);
    }
  }

  render() {
    const answers = this.state.answers.map((answer, index) => {
      return <Answer key={index} text={answer.text} />
    })

    return (
      <div>
        <AnswerForm 
          ansKeyUp={this.ansKeyUp}
          onSubmit={this.submitAnswer}
        />
        {answers}
      </div>
      
    )
  }

  }

  export default ChooserContainer