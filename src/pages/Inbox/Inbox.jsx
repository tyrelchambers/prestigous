import React, { useState, useEffect } from 'react';
import DisplayWrapper from '../../layouts/DisplayWrapper/DisplayWrapper'
import InboxMessageList from '../../layouts/InboxMessageList/InboxMessageList';
import InboxChat from '../../layouts/InboxChat/InboxChat';
import DashSubnav from '../../layouts/DashSubnav/DashSubnav';
import './Inbox.scss'
import { DashButton } from '../../components/buttons/Buttons';
import { Link } from 'react-router-dom';
import { NewMessage } from '../../components/NewMessage/NewMessage';

const Inbox = ({location}) => {
  const [ messages, setMessages ] = useState();

  const params = new URLSearchParams(location.search);
  console.log(params.get("compose"))
  if ( params.has("compose") && params.get("compose") === "true" ) {
    return <NewMessage />
  } else {
     return <Messages
       messages={messages}
    />
  }
}

const Messages = ({messages}) => (
  <DisplayWrapper header={true}>
    <DashSubnav />
    <div className="inbox-header center d-f ai-c jc-sb">
      <h1 className="ta-c title">Inbox</h1>
      <Link to="/dashboard/inbox?compose=true">
        <i className="fas fa-pen-fancy mr-"></i>
        Compose
      </Link>
    </div>
    <section className="inbox-wrapper center">
      {messages && 
        <React.Fragment>
          <InboxMessageList data={messages}/>
          <InboxChat data={messages[0]}/>
        </React.Fragment>
      }

      {!messages &&
        <div className="d-f fxd-c ai-c inbox-no-messages">
          <i className="fas fa-envelope-open-text"></i>
          <p className="ta-c subtitle">No messages! Click "compose" to begin a conversation!</p>
        </div>
      }
    </section>
  </DisplayWrapper>
)

export default Inbox;
