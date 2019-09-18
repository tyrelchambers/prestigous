import React from 'react'
import DisplayWrapper from '../../layouts/DisplayWrapper/DisplayWrapper'
import {Link} from 'react-router-dom'
import './Signup.scss';
import ParticlesBG from '../../components/Particles/Particles';
import WriterForm from '../../components/forms/WriterForm';
import NarratorForm from '../../components/forms/NarratorForm';

const Signup = (props) => {
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
        <h1 className='ta-c'>What role would you like?</h1>

        <div className="d-f ai-c p-">
          <Link to="/signup?r=writer" className={isWriter ? "role-select-active" : ""}>
            Writer
          </Link>

          <Link to="/signup?r=narrator" className={isNarrator ? "role-select-active" : ""}>
            Narrator
          </Link>
        </div>
        {activeForm}
      </div>
    </DisplayWrapper>
  )
}

export default Signup
