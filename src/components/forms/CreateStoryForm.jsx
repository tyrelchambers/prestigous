import React, { useEffect } from 'react'
import FormWrapper from './FormWrapper'
import { MainInput } from '../inputs/Inputs'
import ReactQuill from 'react-quill';
import { SubmitButton } from '../buttons/Buttons';

const CreateStoryForm = () => {
 
  const fullName = "Tyrel Chambers";

  return (
    <FormWrapper classNames="form-wide">
      <div className="field-group">
        <label htmlFor="body" className="form-label">Story</label>
        <div id="editor">
          <ReactQuill
            theme="bubble"
            placeholder="Create your epic..."
            bounds="#editor"
          />
        </div>
      </div>

      <h3 className="mt+ subtitle thin">Story Details</h3>
      <div className="field-group">
        <label htmlFor="title" className="form-label">Title</label>
        <MainInput
          placeholder="Story title"
          name="title"
        />
      </div>

      <div className="field-group">
        <label htmlFor="title" className="form-label">Author</label>
        <MainInput
          placeholder={`Defaults to ${fullName}`}
          name="author"
        />
      </div>

      <h3 className="mt+ subtitle thin">Meta Details</h3>

      <div className="field-group">
        <label htmlFor="theme" className="form-label">General Theme</label>
        <MainInput
          placeholder="Dark Web, Horror, Feel Good, Wholesome, Romantic, etc. (Up to 3)"
          name="theme"
        />
      </div>

      <div className="field-group">
        <label htmlFor="tags" className="form-label">Tags</label>
        <MainInput
          placeholder="Press 'Enter' to submit a tag"
          name="tags"
        />
      </div>

      <div className="field-group">
        <label htmlFor="notes" className="form-label">Notes</label>
        <MainInput
          placeholder="Notes are public information included alongside your story"
          name="notes"
        />
      </div>

      <div className="d-f jc-c mt+">
        <SubmitButton
          icon={<i className="fas fa-check ml-"></i>}
          text="Submit Story"
        />
      </div>
    </FormWrapper>
  )
}


export default CreateStoryForm
