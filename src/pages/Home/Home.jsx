import React, { useEffect, useState } from 'react'
import DisplayWrapper from '../../layouts/DisplayWrapper/DisplayWrapper'
import FeaturedStory from '../../layouts/FeaturedStory/FeaturedStory'
import FeaturedUser from '../../layouts/FeaturedUser/FeaturedUser'
import { Link } from 'react-router-dom'
import './Home.scss'
import GenreList from '../../layouts/GenreList/GenreList'
import { useAuth0 } from '../../react-auth0-wrapper'
import { allStories } from '../../api/stories/stories'
import { HomeStoryList } from '../../components/HomeStoryList/HomeStoryList'


const narrator = {
  username: "Stories After Midnight",
  "followers": 250,
  "avatar_url": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80",
  partner: true,
  payingMember: true
}

const story = {
  title: "This is a story that hopefully is just long enough yea yea yea",
  username: "imtyrelchambers",
  likedBy: ["100"],
  views: 800000,
  bannerUrl: "https://images.unsplash.com/photo-1487023269153-8ab6d0e24173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"
}



const Home = (props) => {
  return (
    <DisplayWrapper header={true}>
      <div className="p+">
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

        <div className=" pt+ ">
          <hr className="hr"/>
          <h3 className="title">Recently Published</h3>
        </div>

        <main className="story-list-wrapper  pt- ">
          <HomeStoryList {...props}/>
        </main>

        <div className="container center d-f  jc-c mt+">
          <Link to="#">
            Discover More
          </Link>
        </div>
        <hr className="hr"/>
        <div>
          <h3 className="title">Or Pick A Genre</h3>
          <GenreList />
        </div>
      </div>
    </DisplayWrapper>
  )
}

export default Home
