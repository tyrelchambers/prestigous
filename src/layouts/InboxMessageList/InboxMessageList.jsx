import React from 'react'
import './InboxMessageList.scss'

const InboxMessageList = ({data}) => {
  
  const messagesItems = data.map((x, id) => (
    <div className="inbox-item" key={id}>
      <div className=" m-">
        <img src={x.avatar} alt="Avatar thumbnail" className="avatar-small"/>
      </div>
      <div className="inbox-preview">
        <p className="inbox-preview-small m0">{x.from}</p>
        <h4 className="inbox-preview-subject m0">{x.subject}</h4>
        <p className="inbox-preview-small m0">{concat(x.messages[0].message)}</p>
      </div>
    </div>
  ))

  return (
    <div className="inbox-list-wrapper">
      {messagesItems}
    </div>
  )
}

const concat = (text) => {
  return text.slice(0, 70) + '...';
}

export default InboxMessageList
