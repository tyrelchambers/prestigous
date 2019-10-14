import React, { useState } from 'react'
import './NotificationBell.scss'
import Notifications from '../../components/Notifications/Notifications'

const notifications = [
  {
    type: 'comment',
    to: 'StoriesAfterMidnight',
    from: 'SomeDude'
  },
  {
    type: 'request',
    to: 'StoriesAfterMidnight',
    from: 'SomeDude'
  },
  {
    type: 'message',
    to: 'StoriesAfterMidnight',
    from: 'SomeDude'
  }
]

const NotificationBell = () => {
  const [ expanded, setExpanded ] = useState(false);

  const isExpanded = expanded ? "" : "hidden";

  const Dropdown = () => {
    return (
      <div className={`dropdown-wrapper ${isExpanded}`}>
       {notifications.map((x, id) =>  <Notifications key={id} type={x.type} to={x.to} from={x.from}/>)}
      </div>
    )
  }

  const bellSelector = expanded ? (
    <i className="fas fa-bell" onClick={() => setExpanded(false)}></i>
  ) : (
    <i className="far fa-bell" onClick={() => setExpanded(!expanded)}></i>
  );

  return (
    <div className={`notification-bell-wrapper ml+ ${expanded ? "expanded" : ""}`}>
      {bellSelector}
      <Dropdown />
      <NotificationBadge/>
    </div>
  )
}

const NotificationBadge = () => (
  <div className="notification-badge"></div>
)

export default NotificationBell
