import React from 'react'
import DisplayWrapper from '../../layouts/DisplayWrapper/DisplayWrapper'
import SignupForm from '../../components/forms/SignupForm'
import { SubmitButton } from '../../components/buttons/Buttons'

const Signup = () => {
  return (
    <DisplayWrapper header={true}>
      <div className="d-f fxd-c ai-c p+">
        <div className="form-light p- w-560px">
        <h1 className="title ta-c">Become Prestigious</h1>

          <SignupForm />

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
