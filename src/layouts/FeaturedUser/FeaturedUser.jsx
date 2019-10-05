import React from 'react'
import './FeaturedUser.scss'

const FeaturedUser = ({user}) => {
  return (
    <div className="featured-block-wrapper no-bg d-f fxd-c ai-c">
      <img src={user.avatar_url} alt="User avatar" className="featured-block-avatar"/>
      <h3 className="title mt- mb-">{user.username}</h3>
      <div className="d-f jc-c">
        <p className="m0 subtitle">{user.followers} Followers</p>
      </div>
    </div>
  )
}

export default FeaturedUser
