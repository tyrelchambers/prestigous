import React from 'react'
import './forms.scss'
import { MainInput } from '../inputs/Inputs'
import { SubmitButton } from '../buttons/Buttons'

const NarratorForm = ({classNames, style}) => {
  return (
    <form className={`form ${classNames}`} style={style}>
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
          
        />
      </div>

      <div className="field-group">
        <label htmlFor="youtube" className="form-label">Youtube</label>
        <MainInput
          placeholder="@youtube"
          type="text"
          name="youtube"
        />
      </div>

      <div className="d-f jc-c">
        <SubmitButton
          text="Get Started"
          icon={<i className="fas fa-check-circle ml+"></i>}
        />
      </div>
    </form>
  )
}

export default NarratorForm
