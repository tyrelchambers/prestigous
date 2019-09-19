import React from 'react'
import DisplayWrapper from '../../layouts/DisplayWrapper/DisplayWrapper'
import {Link} from 'react-router-dom'
import './CreateProfile.scss';
import ParticlesBG from '../../components/Particles/Particles';
import WriterForm from '../../components/forms/WriterForm';
import NarratorForm from '../../components/forms/NarratorForm';

const CreateProfile = (props) => {
  const param = props.location.search;

  const isWriter = param.match(/writer/i);
  const isNarrator = param.match(/narrator/i);

  const activeForm = isWriter ? (
    <WriterForm
      classNames="center form-light"
      style={{
        position: "relative",
        top: "4em"
      }}
    />
  ) : (
    <NarratorForm
      classNames="center form-light"
      style={{
        position: "relative",
        top: "4em"
      }}
    />
  );

  return (
    <DisplayWrapper style={{
      position: "relative"
    }}>
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
}

export default CreateProfile
