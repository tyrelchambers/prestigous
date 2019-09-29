import React from 'react'
import './Notifications.scss'

const Notifications = ({type, to, from}) => {

  if ( type === "comment" ) {
    return <Comment
            to={to}
            from={from}
          />
  }
}

const Comment = ({to, from}) => (
  <div>
    It's me a commento {to} {from}
  </div>
)

export default Notifications
