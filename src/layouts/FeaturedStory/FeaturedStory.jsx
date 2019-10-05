import React from 'react'
import './FeaturedStory.scss'

const FeaturedStory = ({story}) => {
  return (
    <div className="featured-block-wrapper">
      <main className="featured-block-main">
        <img className="featured-block-thumb" src={story.thumbnail} alt="Story thumbnail"/>
        <h5 className="featured-block-title m0">{story.title}</h5>
        <div className="d-f jc-sb mt--">
          <p className="featured-block-subtitle m0">{story.username}</p>

          <div className="d-f">
            <p className="featured-block-meta m0">{story.likes} likes</p>
            <p className="featured-block-meta m0">{story.views} views</p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default FeaturedStory
