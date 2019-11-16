import React, { useState } from 'react'
import FormWrapper from './FormWrapper'
import { MainInput } from '../inputs/Inputs'
import ReactQuill from 'react-quill';
import { SubmitButton, SecondaryButton, SmallButton, NoStyleButton } from '../buttons/Buttons';
import FileUploader from '../FileUploader/FileUploader';
import LoaderSmall from '../Loaders/LoaderSmall/LoaderSmall';

const CreateStoryForm = ({state, stateHandler, submitHandler, updateEditor, previewHandler, pondRef, removeThumbnailHandler, saveDrafthandler}) => {
  const [ loading, setLoading ] = useState(false);

  const ButtonState = () => 
    !loading ? 
      <SubmitButton
        icon={<i className="fas fa-check mr-"></i>}
        text="Create Story"
        onClick={(e) => {
          submitHandler(e);
          setLoading(true);
        }}
      /> :
      <SubmitButton
        icon={<LoaderSmall/>}
        classNames="pos-r no-padding disabled"
        disabled={true}
      /> 

  return (
    <FormWrapper classNames="form-wide">
      <div className="field-group">
        <label htmlFor="body" className="form-label">Story</label>
        <div id="editor">
          <ReactQuill
            theme="snow"
            placeholder="Create your epic..."
            bounds="#editor"
            onChange={updateEditor}
            value={state.body || ""}
          />
        </div>
      </div>
      <h3 className="mt+ subtitle ta-c thin">Story Details</h3>
      
      <div className="bg-white p- br-8">
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
            placeholder={`Defaults to your username`}
            name="username"
            type="text"
            onChange={stateHandler}
            value={`${state.username}`}
          />
        </div>
      </div>

      <h3 className="mt+ subtitle ta-c thin">Meta Details</h3>

      <div className="bg-white p- br-8">
        <div className="field-group">
          {state.bannerUrl &&
            <React.Fragment>
              <label className="form-label">Current Cover Photo</label>
              <img src={state.bannerUrl} style={{
                objectFit: "contain"
              }}/>
              <div className="d-f jc-c mt-">
                <SmallButton 
                  text="Remove Thumbnail" 
                  classNames="w-132px"
                  onClick={removeThumbnailHandler}
                />
              </div>
            </React.Fragment>
          }

          {!state.bannerUrl &&
            <React.Fragment>
              <label className="form-label">Upload Cover Photo</label>
              <FileUploader 
                pondRef={pondRef}
              />
            </React.Fragment>
          }
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

      <div className="d-f jc-sb mt+">
        <NoStyleButton
          text="Save Draft"
          onClick={saveDrafthandler}
        />
        <div className="d-f ai-c">
          <NoStyleButton
            text="Preview Story"
            onClick={previewHandler}
            classNames="mr-"
          />

          <ButtonState />
        </div>
      </div>
    </FormWrapper>
  )
}





export default CreateStoryForm
