import React from 'react'
import { MainInput } from '../../inputs/Inputs'
import FormWrapper from '../FormWrapper'

const ProfileBasicsForm = () => {
  return (
    <FormWrapper>
       <div className="field-group">
        <label htmlFor="firstName" className="form-label">First Name</label>
        <MainInput
          placeholder="John"
          type="text"
          name="firstName"
        />
      </div>

      <div className="field-group">
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <MainInput
          placeholder="Smith"
          type="text"
          name="lastName"
        />
      </div>

      <div className="field-group">
        <label htmlFor="username" className="form-label">Username</label>
        <MainInput
          placeholder="JohnSmith123"
          type="text"
          name="username"
        />
      </div>
    </FormWrapper>
  )
}

export default ProfileBasicsForm
