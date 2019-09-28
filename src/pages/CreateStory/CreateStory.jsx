import React from 'react'
import CreateStoryForm from '../../components/forms/CreateStoryForm'
import './CreateStory.scss'
import DisplayWrapper from '../../layouts/DisplayWrapper/DisplayWrapper';
const CreateStory = () => {
  return (
    <DisplayWrapper 
      header={true}
    >
      <div className="container center create-story-wrapper">
        <h1 className="title">Create Your Next Masterpiece!</h1>
        <CreateStoryForm/>
      </div>
    </DisplayWrapper>
  )
}

export default CreateStory
