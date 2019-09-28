import React from 'react'
import { MainInput } from '../inputs/Inputs'
import { SubmitButton } from '../buttons/Buttons'
import FormWrapper from './FormWrapper'

const SignupForm = ({classNames}) => {
  return (
    <FormWrapper>
      <div className="field-group">
        <label htmlFor="email" className="form-label">Email</label>
        <MainInput
          placeholder="human@earth.com"
          type="email"
          name="email"
        />
      </div>

      <div className="field-group">
        <label htmlFor="password" className="form-label">Password</label>
        <MainInput
          placeholder="Anything but password123"
          type="password"
          name="password"
        />
      </div>

      <div className="field-group">
        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
        <MainInput
          placeholder="Confirm password"
          type="password"
          name="confirmPassword"
        />
      </div>

      <div className="d-f jc-c">
        <SubmitButton
          text="Become Prestigious"
          icon={<i className="fas fa-crown ml-"></i>}
          onClick={submitHandler}
        />
      </div>
    </FormWrapper>    
  )
}

const submitHandler = (e) => {
  e.preventDefault();
  window.location.href = "/create_profile?r=writer";
}

export default SignupForm
