import React from 'react'
import './forms.scss'
import { MainInput } from '../inputs/Inputs'
import { SubmitButton } from '../buttons/Buttons'
import deleteParams from '../../helpers/deleteParams'
import FormWrapper from './FormWrapper'

const WriterForm = ({classNames, style}) => {
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

      <h3 className="form-subtitle mt-large">Social Media</h3>
      <div className="field-group">
        <label htmlFor="website" className="form-label">Website</label>
        <MainInput
          placeholder="www.example.com"
          type="text"
          name="website"
        />
      </div>

      <div className="field-group">
        <label htmlFor="twitter" className="form-label">Twitter</label>
        <MainInput
          placeholder="@twitter"
          type="text"
          name="twitter"
        />
      </div>

      <div className="field-group">
        <label htmlFor="facebook" className="form-label">Facebook</label>
        <MainInput
          placeholder="@facebook"
          type="text"
          name="facebook"
        />
      </div>

      <div className="field-group">
        <label htmlFor="instagram" className="form-label">Instagram</label>
        <MainInput
          placeholder="@instagram"
          type="text"
          name="instagram"
        />
      </div>

      <div className="field-group">
        <label htmlFor="reddit" className="form-label">Reddit</label>
        <MainInput
          placeholder="u/JohnSmith123"
          type="text"
          name="reddit"
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

const submitHandler = (e) => {
  e.preventDefault();
  const url = window.location.href;
  deleteParams(url, "/dashboard", "r");
}
export default WriterForm
