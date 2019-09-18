import React from 'react'
import './forms.scss'

const SignupForm = ({classNames, style}) => {
  return (
    <form className={`form ${classNames}`} style={style}>

      <h3>The Basics</h3>
      <div className="field-group">
        <label htmlFor="firstName" className="form-label">First Name</label>
      </div>

      <div className="field-group">
        <label htmlFor="lastName" className="form-label">Last Name</label>
      </div>

      <div className="field-group">
        <label htmlFor="username" className="form-label">Username</label>
      </div>

      <h3>Social Media</h3>
      <div className="field-group">
        <label htmlFor="website" className="form-label">Website</label>
      </div>

      <div className="field-group">
        <label htmlFor="twitter" className="form-label">Twitter</label>
      </div>

      <div className="field-group">
        <label htmlFor="facebook" className="form-label">Facebook</label>
      </div>

      <div className="field-group">
        <label htmlFor="instagram" className="form-label">Instagram</label>
      </div>

      <div className="field-group">
        <label htmlFor="reddit" className="form-label">Reddit</label>
      </div>
    </form>
  )
}

export default SignupForm
