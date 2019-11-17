import React from 'react'
import SelectInput from '../SelectInput/SelectInput'
import genres from './genreOptions'
import './StoryFilters.scss'
import { NoStyleButton } from '../buttons/Buttons'

const StoryFilters = () => {
  
  const clearParams = () => {
    window.location.search = "";
  }


  return (
    <div className="d-f ai-c story-filters-wrapper">
      <hr className="hr"/>
      <div className="d-f">
        <SelectInput
          label="Published"
          data={genres}
        />
        <SelectInput
          label="Tags"
          data={genres}
        />
        <SelectInput
          label="Theme"
          data={genres}
        />
        <NoStyleButton 
          text="Clear filters"
          onClick={clearParams}
        />
      </div>
    </div>
  )
}

export default StoryFilters
