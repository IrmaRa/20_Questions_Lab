import React from 'react'
import GuesserContainer from './GuesserContainer'
import ChooserContainer from './ChooserContainer'
import io from 'socket.io-client'

class GameContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      player: null,
    }

    //this.socket = io();
    //this.socket.on("chat", this.addQuestion.bind(this));

  }



  selectGuesser() {
    this.setState({ player: "guesser" })
  }

  selectChooser() {
    this.setState({ player: "chooser" })
  }

  render() {
    
    if (this.state.player === "guesser") {
      return (
        <GuesserContainer />

      )
    } else if (this.state.player === "chooser") {
      return (
        <ChooserContainer />
      )
    } else {
      return (
        <div>
        <h2>Let's play 20 questions</h2>
          <button id='guesser' onClick={this.selectGuesser.bind(this)}>Guesser</button>
          <button id='chooser' onClick={this.selectChooser.bind(this)}>Chooser</button>
        </div>
      )
    }
  }

}

export default GameContainer