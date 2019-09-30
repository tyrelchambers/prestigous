import React from 'react'
import StoryCompact from '../StoryCompact/StoryCompact'
import './StoryWidget.scss'

const StoryWidget = () => {
  return (
    <div className="story-widget-wrapper">
      <h2 className="title">Recently Published Stories</h2>
      <main className="story-widget-main d-f">
        <StoryCompact/>
        <StoryCompact/>
        <StoryCompact/>

      </main>
    </div>
  )
}

export default StoryWidget
