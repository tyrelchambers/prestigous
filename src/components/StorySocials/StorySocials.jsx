import React, { useState } from 'react'
import './StorySocials.scss';
import { likeStory, dislikeStory } from '../../api/patch';

export const StorySocials = ({story, profile}) => {
  const [ liked, setLiked ] = useState(story.likedBy.includes(profile._id));

  return (
    <div className="story-socials-wrapper d-f ai-c mt+">
      <Heart 
        story={story}
        liked={liked}
        setLiked={setLiked}
      />

      <div className="d-f fxd-c jc-c ai-c social-item">
        <i className="fab fa-twitter"></i>
        <p className="tt-u m0">Share</p>
      </div>

      <div className="d-f fxd-c jc-c ai-c social-item">
        <i className="fab fa-facebook"></i>
        <p className="tt-u m0">Share</p>
      </div>

      <div className="d-f fxd-c jc-c ai-c social-item">
        <i className="fas fa-comment"></i>
        <p className="tt-u m0">Message</p>
      </div>

      <div className="d-f fxd-c jc-c ai-c social-item">
        <i className="fas fa-envelope"></i>
        <p className="tt-u m0">Send</p>
      </div>
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