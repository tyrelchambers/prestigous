import React from 'react'
import './forms.scss'
import { MainInput } from '../inputs/Inputs'
import { SubmitButton } from '../buttons/Buttons'
import FormWrapper from './FormWrapper'

const NarratorForm = ({classNames, style, submitHandler, onChange}) => {
  return (
    <FormWrapper
      classNames={classNames}
      style={style}
    >
      <h1 className="form-title">Create A Basic Profile</h1>
      <h3 className="form-subtitle">The Basics</h3>
      <div className="field-group">
        <label htmlFor="firstName" className="form-label">First Name</label>
        <MainInput
          placeholder="John"
          type="text"
          onChange={e => onChange(e)}
          name="firstName"
        />
      </div>

      <div className="field-group">
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <MainInput
          placeholder="Smith"
          type="text"
          onChange={e => onChange(e)}
          name="lastName"
        />
      </div>

      <div className="field-group">
        <label htmlFor="username" className="form-label">Username</label>
        <MainInput
          placeholder="JohnSmith123"
          type="text"
          onChange={e => onChange(e)}
          name="username"
        />
      </div>

      <h3 className="form-subtitle mt-large">Social Media</h3>
      <div className="field-group">
        <label htmlFor="website" className="form-label">Website</label>
        <MainInput
          placeholder="www.example.com"
          type="text"
          onChange={e => onChange(e)}
          name="website"
        />
      </div>

      <div className="field-group">
        <label htmlFor="twitter" className="form-label">Twitter</label>
        <MainInput
          placeholder="@twitter"
          type="text"
          onChange={e => onChange(e)}
          name="twitter"
        />
      </div>

      <div className="field-group">
        <label htmlFor="facebook" className="form-label">Facebook</label>
        <MainInput
          placeholder="@facebook"
          type="text"
          onChange={e => onChange(e)}
          name="facebook"
        />
      </div>

      <div className="field-group">
        <label htmlFor="instagram" className="form-label">Instagram</label>
        <MainInput
          placeholder="@instagram"
          type="text"
          onChange={e => onChange(e)}
          
        />
      </div>

      <div className="field-group">
        <label htmlFor="youtube" className="form-label">Youtube</label>
        <MainInput
          placeholder="@youtube"
          type="text"
          onChange={e => onChange(e)}
          name="youtube"
        />
      </div>

      <div className="d-f jc-c">
        <SubmitButton
          text="Get Started"
          icon={<i className="fas fa-check-circle mr-"></i>}
          onClick={submitHandler}
        />
      </div>
    </FormWrapper>
  )
}

export default NarratorForm
