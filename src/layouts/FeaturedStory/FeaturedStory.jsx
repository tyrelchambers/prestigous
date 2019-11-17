import React from 'react'
import './FeaturedStory.scss'
import { Link } from 'react-router-dom'
import { deleteStory } from '../../api/delete';

const FeaturedStory = ({story, classNames, deleteHandler}) => {
  const isDashboard = window.location.pathname.match(/\/profile\/stories/);

  return (
    <div className={`featured-block-wrapper m- ${classNames ? classNames : ""}`}>
      <Link to={`/story/${story.title}`}>
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

     {isDashboard &&
       <div className="featured-block-overlay">
        <Link className="edit" to={`/create_story?edit=true&storyId=${story._id}`}>
          <p>Edit</p>
        </Link>

        <Link className="view" to={`/story/${story.title}`}>
          <p>View</p>
        </Link>

        <div className="delete" onClick={deleteHandler}>
          <p>Delete</p>
        </div>
      </div>
     }
    </div>
  )
}

export default FeaturedStory
