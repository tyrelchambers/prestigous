import React from 'react'
import DisplayWrapper from '../../layouts/DisplayWrapper/DisplayWrapper'
import FeaturedStory from '../../layouts/FeaturedStory/FeaturedStory'
import FeaturedUser from '../../layouts/FeaturedUser/FeaturedUser'

const narrator = {
  username: "Stories After Midnight",
  "followers": 250,
  "avatar_url": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
}

const story = {
  title: "This is a story that hopefully is just long enough",
  username: "imtyrelchambers",
  likes: 100,
  views: 800000,
  thumbnail: "https://images.unsplash.com/photo-1487023269153-8ab6d0e24173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
}

const Home = () => {
  return (
    <DisplayWrapper header={true}>
      <div className="container center">
        <section className="d-f jc-sb">
          <div className="d-f fxd-c">
            <h4 className="title">Featured Story</h4>
            <FeaturedStory story={story}/>
          </div>
          <div className="d-f fxd-c">
            <h4 className="title">Top Rated Narrator</h4>
            <FeaturedUser user={narrator}/>
          </div>
          <div className="d-f fxd-c">
            <h4 className="title">Top Rated Writer</h4>
            <FeaturedUser user={narrator}/>
          </div>
        </section>
      </div>
    </DisplayWrapper>
  )
}

export default Home
