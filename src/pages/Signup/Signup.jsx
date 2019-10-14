import React, { useState } from 'react'
import DisplayWrapper from '../../layouts/DisplayWrapper/DisplayWrapper'
import SignupForm from '../../components/forms/SignupForm'
import { SubmitButton } from '../../components/buttons/Buttons'

const Signup = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });


  const stateHandler = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value});
  }

  return (
    <DisplayWrapper header={true}>
      <div className="d-f fxd-c ai-c p+">
        <div className="form-light p- w-560px">
        <h1 className="title ta-c">Become Prestigious</h1>

          <SignupForm
            onChange={stateHandler}
          />

          <div className="d-f jc-c">
            <SubmitButton
              text="Become Prestigious"
              icon={<i className="fas fa-crown mr-"></i>}
              onClick={submitHandler}
            />
          </div>
        </div>
      </div>
    </DisplayWrapper>
  )
}


const submitHandler = (e) => {
  e.preventDefault();
  window.location.href = "/create_profile?r=writer";
}

export default Signup
