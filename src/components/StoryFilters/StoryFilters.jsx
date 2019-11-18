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
      <div className="d-f ai-c">
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
        <p className="thin whs-nw subtitle" onClick={clearParams}>Clear Filters</p>
      </div>
    </div>
  )
}

export default StoryFilters
