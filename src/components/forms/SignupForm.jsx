import React from 'react'
import { MainInput } from '../inputs/Inputs'
import { SubmitButton } from '../buttons/Buttons'

const SignupForm = ({classNames}) => {
  return (
    <form className={`form ${classNames}`}>
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
          icon={<i className="fas fa-crown mr-"></i>}
          onClick={submitHandler}
        />
      </div>
    </form>
  )
}

const submitHandler = (e) => {
  e.preventDefault();
  window.location.href = "/create_profile?r=writer";
}

export default SignupForm
