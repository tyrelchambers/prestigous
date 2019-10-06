import React from 'react'
import './Notifications.scss'

const Notifications = ({type, to, from}) => {
  if ( type === "comment" ) {
    return <Comment
            to={to}
            from={from}
          />
  }

  if ( type === "message" ) {
    return <Message
            to={to}
            from={from}
          />
  }

  if ( type === "request" ) {
    return <Request
            to={to}
            from={from}
          />
  }

  return null;
}

const Comment = ({to, from}) => (
  <div className="notification-item comment">
    <div>
      <span className="bold">{from} </span>commented on <span className="bold">{to}</span>
    </div>
  </div>
)

const Message = ({to, from}) => (
  <div className="notification-item message">
    <div>
      <span className="bold">{from} </span> sent you a message
    </div>
  </div>
)

const Request = ({to, from}) => (
  <div className="notification-item request">
    <div>
      <span className="bold">{from} </span> requested to read <span className="bold">{to}</span>
    </div>
  </div>
)

export default Notifications
