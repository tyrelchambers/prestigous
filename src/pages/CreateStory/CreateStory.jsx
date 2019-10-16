import React, { useEffect, useState } from 'react'
import CreateStoryForm from '../../components/forms/CreateStoryForm'
import './CreateStory.scss'
import DisplayWrapper from '../../layouts/DisplayWrapper/DisplayWrapper';
import { inject, observer } from 'mobx-react';
import Axios from 'axios';
import { toast } from 'react-toastify';
import DashSubnav from '../../layouts/DashSubnav/DashSubnav';

const CreateStory = inject("UserStore")(observer(({UserStore}) => {
  const [details, setDetails ] = useState({
    title: "",
    editor: "",
    tags: "",
    author: "",
    theme: ""
  });

  useEffect(() => {
    setDetails({
      author: `${UserStore.profile.firstName} ${UserStore.profile.lastName}`
    });
  }, [UserStore.profile]);

  const submitHandler = (e) => {
    e.preventDefault();
    Axios.post(`${process.env.REACT_APP_BACKEND_USERS}/api/story/create`, {
      ...details
    }, {
      withCredentials: true
    })
    .then(res => toast.success(res.data.success))
    .catch(console.log);
    window.location.href = "/dashboard";
  }

  const stateHandler = (e) => {
    setDetails({...details, [e.target.name]: e.target.value});
  }

  const updateEditorHandler = (v) => {
    setDetails({...details, editor: v})
  }

  return (
    <DisplayWrapper 
      header={true}
    >
      <DashSubnav />
      <div className="container center create-story-wrapper">
        <h1 className="title">Create Your Next Masterpiece!</h1>
        <CreateStoryForm
          state={details}
          stateHandler={stateHandler}
          submitHandler={submitHandler}
          updateEditor={updateEditorHandler}
        />
      </div>
    </DisplayWrapper>
  )
}));

export default CreateStory
