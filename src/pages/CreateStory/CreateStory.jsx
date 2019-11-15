import React, { useEffect, useState, useRef } from 'react'
import CreateStoryForm from '../../components/forms/CreateStoryForm'
import './CreateStory.scss'
import DisplayWrapper from '../../layouts/DisplayWrapper/DisplayWrapper';
import { inject, observer } from 'mobx-react';
import Axios from 'axios';
import { toast } from 'react-toastify';
import DashSubnav from '../../layouts/DashSubnav/DashSubnav';
import {format} from 'date-fns';
import { getSingleDraft, getSingleStory } from '../../api/get';

const CreateStory = inject("UserStore")(observer(({UserStore, location}) => {
  const [details, setDetails ] = useState({
    title: "",
    body: "",
    tags: "",
    username: "",
    theme: "",
    draftId: "",
    bannerUrl: ""
  });
  const [ loading, setLoading ] = useState(true);

  let pond = useRef(null);

  const params = new URLSearchParams(location.search);

  const [ timer, setTimer ] = useState(5000);
  
  useEffect(() => {

    if (params.get("edit") === "true") {
      if ( params.has("draftId") ) {
        const fn = async () => {
          const d = await getSingleDraft(`draftId=${params.get("draftId")}`);
          setDetails({...d.data});
          setLoading(false);
        }
  
        fn();
      }

      if ( params.has("storyId") ) {
        const fn = async () => {
          const d = await getSingleStory(`storyId=${params.get("storyId")}`);
          setDetails({...d.data});
          setLoading(false);
        }
  
        fn();
      }
    }
    return setLoading(true);

  }, []);

  if ( loading ) return null;
  
  // UNCOMMENT ME
  // useEffect(() => {
  //   autoSaveTimer();
  // }, [timer]);

  const createStory = async (e) => {
    e.preventDefault();
    const {
      files,
      ...payload
    } = details;
    let bannerUrl;

    if ( pond.current.getFiles().length > 0 ) {
      bannerUrl = await processFiles()
    }

    Axios.post(`${process.env.REACT_APP_BACKEND_USERS}/api/story/create`, {
      ...payload,
      bannerUrl
    }, {
      withCredentials: true
    })
    .then(res => toast.success(res.data))
    .catch(console.log);
    window.location.href = "/dashboard";
  }

  const editStory = async (e) => {
    e.preventDefault();
    const {
      files,
      ...payload
    } = details;
    let bannerUrl = details.bannerUrl;

    const storyId = params.get("storyId");
    
    if ( !bannerUrl ) {
      if ( pond.current.getFiles().length > 0 ) {
        bannerUrl = await processFiles()
      }
    }
    
    Axios.post(`${process.env.REACT_APP_BACKEND_USERS}/api/story/edit`, {
      ...payload,
      bannerUrl,
      id: storyId
    }, {
      withCredentials: true
    })
    .then(res => toast.success(res.data))
    .catch(console.log);
  }

  const submitHandler = async (e) => {
   if ( params.has("edit") ) {
     return editStory(e);
   }

   if ( !params.has("edit") ) {
    return createStory(e);
   }
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

  const processFiles = async () => {
    const banner = await pond.current.processFiles().then(files => {
      return files[0].serverId;
    });
    return banner;
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

  const removeThumbnailHandler = () => {
    setDetails({...details, bannerUrl: ""});
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
          pondRef={pond}
          removeThumbnailHandler={removeThumbnailHandler}
        />
      </div>
    </DisplayWrapper>
  )
}));

export default CreateStory
