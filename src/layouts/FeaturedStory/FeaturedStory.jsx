import React from 'react'
import './FeaturedStory.scss'
import { Link } from 'react-router-dom'

const FeaturedStory = ({story}) => {
  return (
    <div className="featured-block-wrapper">
      <Link to={`/story/${story._id}`}>
        <main className="featured-block-main">
          <img className="featured-block-thumb" src={story.bannerUrl} alt="Story thumbnail"/>
          <h5 className="featured-block-title m0">{story.title}</h5>
          <div className="d-f jc-sb mt--">
            <p className="featured-block-subtitle m0">{story.username}</p>

            <div className="d-f">
              <p className="featured-block-meta m0">{story.likes} likes</p>
              <p className="featured-block-meta m0">{story.views} views</p>
            </div>
          </div>
        </main>
      </Link>
    </div>
  )
}

export default FeaturedStory
