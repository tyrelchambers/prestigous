import React, { useState, useEffect } from 'react'
import DisplayWrapper from '../../layouts/DisplayWrapper/DisplayWrapper'
import DashSubnav from '../../layouts/DashSubnav/DashSubnav'
import { NewMessageForm } from '../forms/NewMessageForm'
import { sendMessage } from '../../api/post'
import { useAuth0 } from '../../react-auth0-wrapper'
import { getAllUsernames } from '../../api/get'

export const NewMessage = () => {
  const [ state, setState ] = useState({
    to: "",
    message: ""
  });

  useEffect(() => {
    if ( state.to.length > 3 ) {
      getProfiles();
    }
  }, [state.to]);

  const { profile } = useAuth0();

  const sendHandler = async (e) => {
    e.preventDefault();

    await sendMessage(state);
  }

  const stateHandler = (e) => {
    setState({...state, [e.target.name]: e.target.value});
  }

  const getProfiles = async () => {
    const data = await getAllUsernames();
    console.log(data.data)
  }

  return (
    <DisplayWrapper header={true}>
      <DashSubnav />

      <h1 className="ta-c title">Send a message</h1>
      <section className="container center d-f jc-c">
        <NewMessageForm
          sendHandler={sendHandler}
          state={state}
          stateHandler={stateHandler}
        />
      </section>
    </DisplayWrapper>
  )
}

