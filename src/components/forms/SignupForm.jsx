import React from 'react'
import { MainInput } from '../inputs/Inputs'
import FormWrapper from './FormWrapper'

const SignupForm = ({classNames, onChange}) => {
  return (
    <FormWrapper classNames={classNames}>
      <div className="field-group">
        <label htmlFor="email" className="form-label">Email</label>
        <MainInput
          placeholder="human@earth.com"
          onChange={onChange}
          type="email"
          name="email"
        />
      </div>

      <div className="field-group">
        <label htmlFor="password" className="form-label">Password</label>
        <MainInput
          placeholder="Anything but password123"
          onChange={onChange}
          type="password"
          name="password"
        />
      </div>

      <div className="field-group">
        <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
        <MainInput
          placeholder="Confirm password"
          onChange={onChange}
          type="password"
          name="confirmPassword"
        />
      </div>

      
    </FormWrapper>    
  )
}


export default SignupForm
