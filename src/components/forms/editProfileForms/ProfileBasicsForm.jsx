import React from 'react'
import { MainInput } from '../../inputs/Inputs'
import FormWrapper from '../FormWrapper'

const ProfileBasicsForm = ({classNames, firstName, lastName, username, onChange}) => {
  return (
    <FormWrapper classNames={classNames}>
       <div className="field-group">
        <label htmlFor="firstName" className="form-label">First Name</label>
        <MainInput
          placeholder="John"
          type="text"
          name="firstName"
          value={firstName}
          onChange={onChange}
        />
      </div>

      <div className="field-group">
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <MainInput
          placeholder="Smith"
          type="text"
          name="lastName"
          value={lastName}
          onChange={onChange}
        />
      </div>

      <div className="field-group">
        <label htmlFor="username" className="form-label">Username</label>
        <MainInput
          placeholder="JohnSmith123"
          type="text"
          name="username"
          value={username}
          onChange={onChange}
        />
      </div>
    </FormWrapper>
  )
}

export default ProfileBasicsForm
