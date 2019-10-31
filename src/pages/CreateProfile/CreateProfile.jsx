import React, { useState, useEffect } from 'react'
import DisplayWrapper from '../../layouts/DisplayWrapper/DisplayWrapper'
import {Link, Redirect} from 'react-router-dom'
import './CreateProfile.scss';
import ParticlesBG from '../../components/Particles/Particles';
import WriterForm from '../../components/forms/WriterForm';
import NarratorForm from '../../components/forms/NarratorForm';
import Axios from 'axios';
import { useAuth0 } from '../../react-auth0-wrapper';
import Cookies from 'js-cookie';
import { inject } from 'mobx-react';
import { observer } from 'mobx-react-lite';

const CreateProfile = inject("UserStore")(observer(({UserStore, location}) => {
  const [ credentials, setCredentials ] = useState({});
  const param = location.search;
  const { user } = useAuth0();
  const cookie = Cookies.get("sid");
  const isWriter = param.match(/writer/i);
  const isNarrator = param.match(/narrator/i);
  const [ redirect, setRedirect ] = useState(false);

  useEffect(() => {  
    const fn = async () => {
      await Axios.get(`${process.env.REACT_APP_BACKEND_USERS}/api/profile/getProfile`, {
        withCredentials: true
      }).then(res => {
        if ( res.data.profileCreated ) {
          setRedirect(true);
        }
      }).catch(console.log);
    }  
    if (cookie) {
      fn();
    }
  }, []);

  if ( redirect ) {
    return <Redirect to="/" />;
  }

  const stateHandler = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value});
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const profileType = (isWriter || isNarrator);
    const payload = {
      ...credentials,
      ...user,
      role: profileType[0]
    }

    Axios.post(`${process.env.REACT_APP_BACKEND_USERS}/api/profile/create`, payload)
      .then(res => {
        Cookies.set("sid", res.data, { expires: 1});
        UserStore.setProfile(res.data);
        window.location.href = "/";
      })
      .catch(err => console.log(err));
  }

  const activeForm = isWriter ? (
    <WriterForm
      classNames="center form-light"
      style={{
        position: "relative",
        top: "4em"
      }}
      submitHandler={submitHandler}
      onChange={stateHandler}
    />
  ) : (
    <NarratorForm
      classNames="center form-light"
      style={{
        position: "relative",
        top: "4em"
      }}

      onChange={stateHandler}
      submitHandler={submitHandler}
    />
  );

  return (
    <DisplayWrapper 
      header={true}
      style={{
        position: "relative"
      }}
    >
      <div className="role-select-wrapper" data-role={isWriter ? "writer" : "narrator"}>
        <ParticlesBG
          className="particles"
        />
      </div>
      
      <div className="role-select d-f fxd-c">
        <h1 className='ta-c'>Select Your Role</h1>

        <div className="d-f ai-c p-">
          <Link to="/create_profile?r=writer" className={isWriter ? "role-select-active" : ""}>
            Writer
          </Link>

          <Link to="/create_profile?r=narrator" className={isNarrator ? "role-select-active" : ""}>
            Narrator
          </Link>
        </div>
        {activeForm}
      </div>
    </DisplayWrapper>
  )
}));

export default CreateProfile
