import React from 'react'
import './Story.scss'
import { toJS } from 'mobx'

const Story = ({story}) => {
  return (
    <div className="story-wrapper">
      {/* <main className="story-main">
        <div className="story-header">
          <h1 className="title ta-c ">{story.title}</h1>
          <p className="subtitle ta-c">{story.username}</p>
        </div>
        <section className="story-body">
          {story.body}
        </section>

        <hr className="hr"/>
        <div className="d-f">
          <div className="d-f ai-c mr+">
            <i className="far fa-heart mr- subtitle"></i>
            <p className="subtitle">200 likes</p>
          </div>

          <p className="subtitle">
            200 views
          </p>
        </div>
        <div className="mt- mb-">
          <h3 className="subtitle thin m0">Tags</h3>
          <ul className="story-meta">
            {story.tags.map(x => (
            <li>{x}</li>
            ))}
          </ul>
        </div>

        <div className="mt- mb-">
          <h3 className="subtitle thin m0">Genre</h3>
          <ul className="story-meta">
            {story.genre.map(x => (
              <li>{x}</li>
            ))}
          </ul>
        </div>
        
        <h3 className="subtitle thin mt- mb-">Notes</h3>
        <p className="subtitle">{story.notes}</p>

        <hr className="hr"/>
      </main> */}
    </div>
  )
}

export default Story
