import React from 'react'
import './InboxChat.scss'
import { MainInput } from '../../components/inputs/Inputs';
import { MessageButton } from '../../components/buttons/Buttons';

const InboxChat = ({data}) => {
  const currentUser = "StoriesAfterMidnight";

  const PersonalReply = ({data}) => {
    return (
      <div className="personal-reply-wrapper chat-bubble">
        <main>
          {data.message}
        </main>
      </div>
    )
  }

  const OtherReply = ({data}) => {
    return (
      <div className="other-reply-wrapper chat-bubble">
        <div className=" mr+">
          <img src={data.avatar} alt="Avatar thumbnail" className="avatar-small"/>
        </div>

        <main>
          {data.message}
        </main>
      </div>
    )
  }

  const replies = data.messages.map(x => x.from === currentUser ? <OtherReply data={x}/> : <PersonalReply data={x}/>)


  return (
    <div className="inbox-chat-wrapper">
      <section className="inbox-chat-header d-f ai-c">
        <div className="m+">
          <img src={data.avatar} alt="Avatar thumbnail" className="avatar-small"/>
        </div>
        <div>
          <h5 className="subtitle thin m0">{data.from}</h5>
          <h2 className="title m0">{data.subject}</h2>
        </div>
      </section>

      <main className="inbox-chat-replies">
        {replies}
      </main>
      
      <div className="d-f ai-c mt-">
        <MainInput
          placeholder="Send a message"
          type="text"
          name="sendMessage"
          className="fx-1"
        />
        <MessageButton
          icon={<i className="fas fa-paper-plane"></i>}
        />
      </div>
    </div>
  )
}

export default InboxChat
