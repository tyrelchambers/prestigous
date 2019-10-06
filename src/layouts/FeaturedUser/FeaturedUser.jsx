import React from 'react'
import './FeaturedUser.scss'

const FeaturedUser = ({user}) => {
  return (
    <div className="featured-block-wrapper no-bg d-f fxd-c ai-c">
      <div className="avatar-wrapper">
        <img src={user.avatar_url} alt="User avatar" className="featured-block-avatar"/>
        {user.payingMember && 
          <div className="avatar-badge paying-member">
            <i className="fas fa-crown"></i>
          </div>
        }

        {user.partner && 
          <div className="avatar-badge partner">
            <i className="fas fa-heart"></i>
          </div>
        }
      </div>
      <h3 className="title mt- mb-">{user.username}</h3>
      <div className="d-f jc-c">
        <p className="m0 subtitle">{user.followers} Followers</p>
      </div>
    </div>
  )
}

export default FeaturedUser
