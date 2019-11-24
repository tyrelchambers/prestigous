import React from 'react'
import FormWrapper from './FormWrapper'
import { MainInput } from '../inputs/Inputs'
import '../inputs/inputs.scss';
import { SubmitButton } from '../buttons/Buttons';

export const NewMessageForm = ({sendHandler, state, stateHandler, autocomplete, clickHandler}) => {
  return (
    <FormWrapper>
      <div className="field-group pos-r">
        <label htmlFor="to" className="form-label">To:</label>
        <MainInput
          placeholder="username"
          name="to"
          type="text"
          onChange={stateHandler}
          value={state.to}
        />

        {autocomplete.length > 0 &&
          <div className="autocomplete-wrapper">
            {autocomplete.map((x, id) => (
              <div key={id} className="d-f" onClick={() => clickHandler(x.email)}>
                <p className="autocomplete-title mr-">{x.username}</p>
                <p className="autocomplete-subtitle">{x.email}</p>
              </div>
            ))}
          </div>
        }
      </div>

      <div className="field-group">
        <label htmlFor="message" className="form-label">Message:</label>
        <textarea 
          placeholder="What would you like to say?" 
          className="form-textarea" 
          rows="20" 
          name="message"
          onChange={stateHandler}
          value={state.message}  
        />
      </div>

      <div className="form-actions d-f jc-fe">
        <SubmitButton
          text="Send message"
          icon={<i className="far fa-arrow-alt-circle-right mr-"></i>}
          onClick={sendHandler}
        />
      </div>
    </FormWrapper>
  )
}
