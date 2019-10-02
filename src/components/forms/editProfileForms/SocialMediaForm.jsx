import React from 'react'
import { MainInput } from '../../inputs/Inputs'
import FormWrapper from '../FormWrapper'

const SocialMediaForm = ({profileType}) => {
  if (profileType === "narrator") {
    return (
      <FormWrapper>
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
      </FormWrapper>    
    )
  }

  if ( profileType === "writer" ) {
    return (
      <FormWrapper>
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
      </FormWrapper>
    )
  }
}

export default SocialMediaForm
