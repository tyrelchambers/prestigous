import React from 'react'
import DisplayWrapper from '../../layouts/DisplayWrapper/DisplayWrapper'
import FeaturedStory from '../../layouts/FeaturedStory/FeaturedStory'
import FeaturedUser from '../../layouts/FeaturedUser/FeaturedUser'
import StoryFilters from '../../components/StoryFilters/StoryFilters'
import './Home.scss'

const narrator = {
  username: "Stories After Midnight",
  "followers": 250,
  "avatar_url": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
}

const story = {
  title: "This is a story that hopefully is just long enough yea yea yea",
  username: "imtyrelchambers",
  likes: 100,
  views: 800000,
  thumbnail: "https://images.unsplash.com/photo-1487023269153-8ab6d0e24173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
}

const Home = () => {
  return (
    <DisplayWrapper header={true}>
      <div className="">
        <section className="d-f jc-sb container center">
          <div className="d-f fxd-c">
            <h4 className="title ta-c">Featured Story</h4>
            <FeaturedStory story={story}/>
          </div>
          <div className="d-f fxd-c">
            <h4 className="title ta-c">Top Rated Narrator</h4>
            <FeaturedUser user={narrator}/>
          </div>
          <div className="d-f fxd-c">
            <h4 className="title ta-c">Top Rated Writer</h4>
            <FeaturedUser user={narrator}/>
          </div>
        </section>

        <div className="pr+ pt+ pl+">
          <StoryFilters />
        </div>

        <main className="story-list-wrapper pr+ pt- pl+">
          <FeaturedStory story={story}/>
          <FeaturedStory story={story}/>
          <FeaturedStory story={story}/>
          <FeaturedStory story={story}/>
          <FeaturedStory story={story}/>
          <FeaturedStory story={story}/>
          <FeaturedStory story={story}/>
          <FeaturedStory story={story}/>
          <FeaturedStory story={story}/>
          <FeaturedStory story={story}/>
          <FeaturedStory story={story}/>
          <FeaturedStory story={story}/>
          <FeaturedStory story={story}/>
          <FeaturedStory story={story}/>
          <FeaturedStory story={story}/>
        </main>
      </div>
    </DisplayWrapper>
  )
}

export default Home
