import React from 'react'
import './StoryCompact.scss'
import { Link } from 'react-router-dom'

const StoryCompact = ({id, title, author,created_at}) => {
  return (
    <div className="story-compact-wrapper" >
      <Link to={`/story/${id}`} className="story-compact-body">
        <main className="story-compact-main">
          <h2 className="bold title">{title}</h2>
          <h4 className="subtitle thin">{author}</h4>
          <p className="subtitle">{created_at}</p>
        </main>
      </Link>
    </div>
  )
}

export default StoryCompact
