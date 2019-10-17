import React from 'react'
import FormWrapper from './FormWrapper'
import { MainInput } from '../inputs/Inputs'
import ReactQuill from 'react-quill';
import { SubmitButton } from '../buttons/Buttons';
import FileUploader from '../FileUploader/FileUploader';

const CreateStoryForm = ({state, stateHandler, submitHandler, updateEditor, fileUploadToState, previewHandler}) => {

  return (
    <FormWrapper classNames="form-wide">
      <div className="field-group">
        <label htmlFor="body" className="form-label">Story</label>
        <div id="editor">
          <ReactQuill
            theme="bubble"
            placeholder="Create your epic..."
            bounds="#editor"
            onChange={updateEditor}
          />
        </div>
      </div>

      <h3 className="mt+ subtitle ta-c thin">Story Details</h3>
      
      <div className="bg-white p- br-8 bs">
        <div className="field-group">
          <label htmlFor="title" className="form-label">Title</label>
          <MainInput
            placeholder="Story title"
            name="title"
            type="text"
            onChange={stateHandler}
            value={state.title}
          />
        </div>

        <div className="field-group">
          <label htmlFor="title" className="form-label">Author</label>
          <MainInput
            placeholder={`Defaults to ${state.author}`}
            name="author"
            type="text"
            onChange={stateHandler}
            value={`${state.author}`}
          />
        </div>
      </div>

      <h3 className="mt+ subtitle ta-c thin">Meta Details</h3>

      <div className="bg-white p- br-8 bs">
        <div className="field-group">
          <label className="form-label">Upload Cover Photo</label>
          <FileUploader 
            fileUploadToState={fileUploadToState}
            state={state}  
          />
        </div>
        <div className="field-group">
          <label htmlFor="theme" className="form-label">General Theme</label>
          <MainInput
            placeholder="Dark Web, Horror, Feel Good, Wholesome, Romantic, etc. (Up to 3)"
            name="theme"
            type="text"
            onChange={stateHandler}
            value={state.theme}
          />
        </div>

        <div className="field-group">
          <label htmlFor="tags" className="form-label">Tags</label>
          <MainInput
            placeholder="Press 'Enter' to submit a tag"
            name="tags"
            type="text"
            onChange={stateHandler}
            value={state.tags}
          />
        </div>

        <div className="field-group">
          <label htmlFor="notes" className="form-label">Notes</label>
          <MainInput
            placeholder="Notes are public information included alongside your story"
            name="notes"
            type="text"
            onChange={stateHandler}
            value={state.note}
          />
        </div>
      </div>

      <div className="d-f jc-c mt+">
        <SubmitButton
          icon={<i className="fas fa-check mr-"></i>}
          text="Submit Story"
          onClick={submitHandler}
        />

        <a href="/story/preview" target="_blank" onClick={previewHandler}>Preview Story</a>
      </div>
    </FormWrapper>
  )
}



export default CreateStoryForm
