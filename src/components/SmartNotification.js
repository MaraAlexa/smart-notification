import React from 'react'
import heart from '../images/heartyes.svg'
import '../styles/SmartNotification.css'

const SmartNotification = () =>
    <div className="notification animated slideInLeft">
      <div className="logo-wrap">
        <img className='logo' src={heart} alt=""/>
      </div>
      <div className="message">
        This is the message
      </div>
    </div>

export default SmartNotification
