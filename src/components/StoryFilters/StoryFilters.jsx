import React from 'react'
import SelectInput from '../SelectInput/SelectInput'
import genres from './genreOptions'
import './StoryFilters.scss'

const StoryFilters = () => {
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
      </div>
    </div>
  )
}

export default StoryFilters
