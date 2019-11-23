import React from 'react'
import FormWrapper from './FormWrapper'
import { MainInput } from '../inputs/Inputs'
import '../inputs/inputs.scss';
import { SubmitButton } from '../buttons/Buttons';

export const NewMessageForm = ({sendHandler, state, stateHandler}) => {
  return (
    <FormWrapper>
      <div className="field-group">
        <label htmlFor="to" className="form-label">To:</label>
        <MainInput
          placeholder="username"
          name="to"
          type="text"
          onChange={stateHandler}
          value={state.to}
        />
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
