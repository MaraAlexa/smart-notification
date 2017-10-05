import React, { Component } from 'react'
import './App.css'
import TooltipLogo from './images/heartyes.svg'

import SmartNotification from './components/SmartNotification'


class App extends Component {
  state = {
    visible: false,
  }

  componentWillMount() {
    setTimeout(() => {
      this.show()
    }, 500)
  }

  show() {
    this.setState({
      visible: true
    })
  }

  render() {
    return (
      <div className="App container">
            <SmartNotification />
      </div>
    )
  }
}

export default App
