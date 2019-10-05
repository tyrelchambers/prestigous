import React from 'react'
import SelectInput from '../SelectInput/SelectInput'
import './StoryFilters.scss'

const StoryFilters = () => {
  return (
    <div className="d-f ai-c story-filters-wrapper">
      <hr className="hr"/>
      <div className="d-f">
        <SelectInput label="Published"/>
        <SelectInput label="Tags"/>
        <SelectInput label="Genre"/>
      </div>
    </div>
  )
}

export default StoryFilters
