import React from 'react'
import heart from '../images/hearteyes.svg'
import '../styles/SmartNotification.css'

const Message = () =>
  <div className="message">
    <span className="arrow"></span>
    <p>This is the message</p>
  </div>

const SmartNotification = ({ visible, displayMessage, hideMessage  }) =>
    <div className="notification animated slideInLeft">
      <div
        className="logo-wrap"
        onMouseEnter={displayMessage}
        onMouseLeave={hideMessage}
        >
        <img className='logo' src={heart} alt=""/>
      </div>
      {
        visible ? <Message /> : null
      }

    </div>

export default SmartNotification
