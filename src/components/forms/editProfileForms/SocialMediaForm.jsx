import React from 'react'
import { MainInput } from '../../inputs/Inputs'
import FormWrapper from '../FormWrapper'

const SocialMediaForm = ({role, website, twitter, facebook, instagram, youtube, reddit, onChange, classNames}) => {

  return (
      <FormWrapper classNames={classNames}>
        <div className="field-group">
          <label htmlFor="website" className="form-label">Website</label>
          <MainInput
            placeholder="www.example.com"
            type="text"
            value={website}
            onChange={onChange}
            name="website"
          />
        </div>

        <div className="field-group">
          <label htmlFor="twitter" className="form-label">Twitter</label>
          <MainInput
            placeholder="@twitter"
            type="text"
            value={twitter}
            onChange={onChange}
            name="twitter"
          />
        </div>

        <div className="field-group">
          <label htmlFor="facebook" className="form-label">Facebook</label>
          <MainInput
            placeholder="@facebook"
            type="text"
            value={facebook}
            onChange={onChange}
            name="facebook"
          />
        </div>

        <div className="field-group">
          <label htmlFor="instagram" className="form-label">Instagram</label>
          <MainInput
            placeholder="@instagram"
            type="text"
            value={instagram}
            onChange={onChange}
            name="instagram"
          />
        </div>

        {role === "narrator" &&
          <div className="field-group">
            <label htmlFor="youtube" className="form-label">Youtube</label>
            <MainInput
              placeholder="@youtube"
              type="text"
              value={youtube}
              onChange={onChange}
              name="youtube"
            />
          </div>
        }
  
        {role === "writer" &&
          <div className="field-group">
            <label htmlFor="reddit" className="form-label">Reddit</label>
            <MainInput
              placeholder="u/JohnSmith123"
              type="text"
              value={reddit}
              onChange={onChange}
              name="reddit"
            />
          </div>
        }        
      </FormWrapper>    
    )
}

export default SocialMediaForm
