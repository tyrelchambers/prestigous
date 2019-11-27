import React from 'react'
import './Story.scss'
import UserWidget from '../UserWidget/UserWidget';
import { useAuth0 } from '../../react-auth0-wrapper';
import { StorySocials } from '../StorySocials/StorySocials';

const Story = ({story, profile, user}) => {

  if ( !story ) return null;

  const tags = story.tags ? story.tags.map((x, id) => (
    <li key={id}>{x}</li>
  )) : null;

  const genre = story.genre ? story.genre.map((x, id) => (
    <li key={id}>{x}</li>
  )) : null;

  return (
    <div className="story-wrapper">
      <main className="story-main">
        <div className="story-header">
          
          <h1 className="title ta-c ">{story.title}</h1>
        </div>
        <section className="story-body" dangerouslySetInnerHTML={{ __html: story.body }}>
          
        </section>

        <div className="mt- mb-">
          <StorySocials
            story={story}
            profile={profile}
          />
        </div>
        <hr className="hr"/>
        <UserWidget
            profile={story.profile_id}
            profileImg={user.picture}
          />
        <div className="d-f">
          <div className="d-f ai-c mr+">
            <p className="subtitle">{story.likedBy.length} likes</p>
          </div>

          <div className="d-f ai-c mr+">
            <p className="subtitle">{story.views} views</p>
          </div>
        </div>
        
        {story.tags &&
          <div className="mt- mb-">
            <h3 className="subtitle thin m0">Tags</h3>
            <ul className="story-meta">
              {tags}
            </ul>
          </div>
        }

        {story.genre &&
          <div className="mt- mb-">
            <h3 className="subtitle thin m0">Genre</h3>
            <ul className="story-meta">
              {genre}
            </ul>
          </div>
        }
        
       {story.notes &&
        <React.Fragment>
          <h3 className="subtitle thin mt- mb-">Notes</h3>
          <p className="subtitle">{story.notes}</p>
        </React.Fragment>
       }

        <hr className="hr"/>
      </main>
    </div>
  )
}

export default Story
