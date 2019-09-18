import React from 'react'
import DisplayWrapper from '../../layouts/DisplayWrapper/DisplayWrapper'
import {Link} from 'react-router-dom'
import './Signup.scss';
import ParticlesBG from '../../components/Particles/Particles';
import SignupForm from '../../components/forms/SignupForm';

const Signup = (props) => {
  const param = props.location.search;

  const isWriter = param.match(/writer/i);
  const isNarrator = param.match(/narrator/i);

  return (
    <DisplayWrapper style={{
      position: "relative"
    }}>
      <div className="role-select-wrapper d-f jc-c " data-role={isWriter ? "writer" : "narrator"}>
        <ParticlesBG
          className="particles"
        />
        <div className="role-select d-f fxd-c">
          <h1 className='ta-c'>Choose a role</h1>

          <div className="d-f ai-c p-">
            <Link to="/signup?r=writer" className={isWriter ? "role-select-active" : ""}>
              Writer
            </Link>

            <Link to="/signup?r=narrator" className={isNarrator ? "role-select-active" : ""}>
              Narrator
            </Link>
          </div>
          <SignupForm
            classNames="center"
            style={{
              position: "relative",
              top: "4em"
            }}
          />
        </div>
       
      </div>

  
    </DisplayWrapper>
  )
}

export default Signup
