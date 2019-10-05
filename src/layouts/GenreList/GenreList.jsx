import React from 'react'
import './GenreList.scss'
import { Link } from 'react-router-dom'
const mystery = require('../../assets/images/mystery.jpg');
const thriller = require('../../assets/images/thriller.jpg');
const romantic = require('../../assets/images/romantic.jpg');
const scifi = require('../../assets/images/scifi.jpg');
const comedy = require('../../assets/images/comedy.jpg');
const spy = require('../../assets/images/spy.jpg');
const western = require('../../assets/images/western.jpg');
const horror = require('../../assets/images/horror.jpg'); 

const GenreList = () => {
  return (
    <div className="genre-list ">
      <Genre
        imageUrl={horror}
        text="Horror"
      />
      <Genre
        imageUrl={mystery}
        text="Mystery"
      />
      <Genre
        imageUrl={thriller}
        text="Thriller"
      />
      <Genre
        imageUrl={romantic}
        text="Romantic"
      />
      <Genre
        imageUrl={scifi}
        text="Sci-Fi"
      />
      <Genre
        imageUrl={comedy}
        text="Comedy"
      />

      <Genre
        imageUrl={spy}
        text="Spy"
      />

      <Genre
        imageUrl={western}
        text="Western"
      />
    </div>
  )
}

const Genre = ({imageUrl, text}) => {
  return (
    <Link to="#">
      <div className="genre-list-item" style={{
        backgroundImage: `url(${imageUrl})`
      }}>
        <p>{text}</p>
      </div>
    </Link>
  )
}

export default GenreList
