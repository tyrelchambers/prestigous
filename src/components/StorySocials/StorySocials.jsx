import React, { useState } from 'react'
import './StorySocials.scss';
import { likeStory, dislikeStory } from '../../api/patch';

export const StorySocials = ({story, profile}) => {
  const [ liked, setLiked ] = useState(story.likedBy.includes(profile._id));

  return (
    <div className="story-socials-wrapper">
      <Heart 
        story={story}
        liked={liked}
        setLiked={setLiked}
      />
    </div>
  )
}

const Heart = ({story, liked, setLiked}) => {
  if ( liked ) {
    return (
      <div className="d-f fxd-c ai-c jc-c social-item like" onClick={() => {
        dislikeHandler(story._id);
        setLiked(false)
      }}>
        <i className="fas fa-heart"></i>
        <p className="tt-u m0">Liked</p>
      </div>
    )
  } else {
    return (
      <div className="d-f fxd-c ai-c jc-c social-item like" onClick={() => {
        likeHandler(story._id);
        setLiked(true)
      }}>
        <i className="far fa-heart"></i>
        <p className="tt-u m0">Like</p>
      </div>
    )
  }
}

const likeHandler = (id) => {
  likeStory(id);
}
const dislikeHandler = (id) => {
  dislikeStory(id);
}