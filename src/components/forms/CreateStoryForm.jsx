import React, { useState } from 'react'
import FormWrapper from './FormWrapper'
import { MainInput } from '../inputs/Inputs'
import ReactQuill from 'react-quill';
import { SubmitButton, SmallButton, NoStyleButton } from '../buttons/Buttons';
import FileUploader from '../FileUploader/FileUploader';
import LoaderSmall from '../Loaders/LoaderSmall/LoaderSmall';
import genres from '../StoryFilters/genreOptions';

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

  const dropdownToggle = (e) => {
    const parent = e.target.closest('.select');
    const list = parent.querySelector("#dropdownList");
    
    parent.classList.toggle('expanded-title');
    list.classList.toggle('expanded-select');
  }

  const selectItems = genres.map(x => (
    <div className="select-item" value={x.value} data-label={x.label} key={x.label} name="theme" onClick={(e) => {
      const evt = {
        target: {
          name: "theme",
          value: x.value
        }
      }
      stateHandler(evt);
      changeLabel(e, x.label);
    }}>
      {x.label}
    </div>
  ));

  const changeLabel = (e, value) => {
    const parent = e.target.closest('.select');
    const label = parent.querySelector('#label');
    label.innerHTML = value;
  }

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
          <label htmlFor="tags" className="form-label">Theme</label>
          <div className="select d-f ai-c"onClick={dropdownToggle} >
            <span 
              className="select-label d-f jc-sb ai-c w-100pr"
              id="selectLabel"
            >
              <p id="label">Themes</p>
              <i className="fas fa-chevron-down"></i>  
            </span>

            <div className="select-dropdown" id="dropdownList">
              {selectItems}
            </div>
          </div>
        </div>

        <div className="field-group">
          <label htmlFor="tags" className="form-label">Tags</label>
          <MainInput
            placeholder="Comma separated values"
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
