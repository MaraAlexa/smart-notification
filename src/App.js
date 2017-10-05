import React, { Component } from 'react'
import './App.css'

import SmartNotification from './components/SmartNotification'


class App extends Component {
  state = {
    visible: true
  }

  componentWillMount() {
    setTimeout(() => {
      this.hideNotification()
    }, 5000)
  }

  hideNotification = () => {
    this.setState({
      visible: false
    })
  }

  displayMessage = () => {
    this.setState({
      visible: true
    })
  }

  hideMessage = () => {
    this.setState({
      visible: false
    })
  }

  render() {
    return (
      <div className="App container">
        <SmartNotification
          visible={this.state.visible}
          displayMessage={this.displayMessage}
          hideMessage={this.hideMessage}
        />
      </div>
    )
  }
}

export default App
