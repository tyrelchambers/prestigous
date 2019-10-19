import React, { useEffect, useState } from 'react'
import CreateStoryForm from '../../components/forms/CreateStoryForm'
import './CreateStory.scss'
import DisplayWrapper from '../../layouts/DisplayWrapper/DisplayWrapper';
import { inject, observer } from 'mobx-react';
import Axios from 'axios';
import { toast } from 'react-toastify';
import DashSubnav from '../../layouts/DashSubnav/DashSubnav';
import {format} from 'date-fns';

const CreateStory = inject("UserStore", "StoryStore")(observer(({UserStore, StoryStore}) => {
  const [details, setDetails ] = useState({
    title: "",
    body: "",
    tags: "",
    username: "",
    theme: "",
    files: [],
    draftId: ""
  });

  const [ timer, setTimer ] = useState(5000);

  useEffect(() => {
    setDetails({
      username: `${UserStore.profile.firstName} ${UserStore.profile.lastName}`
    });

  }, [UserStore.profile]);

  useEffect(() => {
    autoSaveTimer();
  }, [timer]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(details)
    Axios.post(`${process.env.REACT_APP_BACKEND_USERS}/api/story/create`, {
      ...details
    }, {
      withCredentials: true
    })
    .then(res => toast.success(res.data.success))
    .catch(console.log);
    // window.location.href = "/dashboard";
  }

  const stateHandler = (e) => {
    setDetails({...details, [e.target.name]: e.target.value});
  }

  const updateEditorHandler = (v) => {
    setDetails({...details, body: v})
  }

  const fileUploadHandler = v => {
    setDetails({...details, files: v.map(fileItem => fileItem.file)})
  }

  const autoSaveTimer = () => {
    setTimeout(() => {
      if ( timer === 0 ) {
        previewHandler();
        return setTimer(300000);
      }
      setTimer(timer - 1000);
    }, 1000);
  }

  const previewHandler = async () => {
    return await Axios.post(`${process.env.REACT_APP_BACKEND_USERS}/api/story/draft/save`, {
      ...details
    }, {
      withCredentials: true
    })
    .then(res => {
      setDetails({...details, draftId: res.data.draftId});
      return res.data.draftId;
    })
    .catch(console.log);
  }

  const getDraft = async () => {
    await previewHandler().then(res => {
      window.open(`/story/preview/draftId=${res}`);
    });
  }

  return (
    <DisplayWrapper 
      header={true}
    >
      <DashSubnav />
      <div className="container center create-story-wrapper">
        <h1 className="title">Create Your Next Masterpiece!</h1>
        <p className="subtitle">Autosave in {format(timer, "m:ss")}</p>
        <CreateStoryForm
          state={details}
          fileUploadToState={fileUploadHandler}
          stateHandler={stateHandler}
          submitHandler={submitHandler}
          updateEditor={updateEditorHandler}
          previewHandler={getDraft}
        />
      </div>
    </DisplayWrapper>
  )
}));

export default CreateStory
