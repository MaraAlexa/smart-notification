import React from 'react'
import heart from '../images/hearteyes.svg'
import '../styles/SmartNotification.css'

const SmartNotification = () =>
    <div className="notification animated slideInLeft">
      <div className="logo-wrap">
        <img className='logo' src={heart} alt=""/>
      </div>
      <div className="message">
        <span className="arrow"></span>
        <p>This is the message</p>
      </div>
    </div>

export default SmartNotification
