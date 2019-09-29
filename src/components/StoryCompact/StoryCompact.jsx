import React from 'react'
import './StoryCompact.scss'
import { Link } from 'react-router-dom'

const story = {
  "type": "story",
  "author": "Tyrel Chambes",
  "tags": "crazy story, creepypasta, weird",
  "theme": "horror, dark web, romantic",
  "title": "Lorem ipsum dolor amet cardigan organic you probably haven't",
  "body": `Lorem ipsum dolor amet bespoke lyft echo park distillery iceland post-ironic twee. Edison bulb asymmetrical fashion axe, vinyl viral butcher chicharrones quinoa meditation raw denim vaporware cardigan adaptogen live-edge authentic. IPhone wolf irony you probably haven't heard of them cloud bread, meh thundercats photo booth schlitz plaid man bun. Fingerstache taxidermy kale chips portland XOXO, DIY everyday carry kinfolk sartorial roof party cardigan green juice humblebrag. Locavore kitsch shaman ethical snackwave.

  Pug air plant aesthetic, pinterest succulents slow-carb tote bag humblebrag photo booth franzen fam prism leggings. Polaroid mixtape unicorn ethical pitchfork sriracha hashtag deep v humblebrag lumbersexual small batch cornhole distillery freegan shabby chic. Readymade selfies heirloom literally, pop-up ramps mixtape pinterest butcher woke. Jianbing glossier pok pok venmo drinking vinegar chartreuse pitchfork etsy hoodie umami vegan iceland. Health goth quinoa artisan chambray, ethical adaptogen vinyl 3 wolf moon wayfarers.
  
  Whatever deep v chartreuse, food truck palo santo aesthetic seitan portland authentic cornhole paleo. Kale chips ramps gentrify readymade craft beer, brunch heirloom succulents locavore. Vape tumblr yuccie jean shorts, banjo chicharrones bespoke pickled neutra gentrify listicle disrupt squid. Jean shorts freegan chia iPhone trust fund microdosing cardigan vexillologist fanny pack gastropub etsy drinking vinegar raclette. Green juice before they sold out drinking vinegar heirloom fanny pack bespoke cornhole biodiesel ramps man braid offal meditation. Poke kitsch master cleanse occupy seitan retro godard hashtag next level organic mlkshk literally. 3 wolf moon gochujang kitsch seitan, freegan master cleanse austin knausgaard poke XOXO intelligentsia air plant stumptown flannel williamsburg.`,
  "license": "free to use",
  "notes": "Go ahead and use, just credit me",
  "created_at": "12:00 January 1, 1977"
}

const StoryCompact = ({type, author,created_at}) => {
  return (
    <div className="story-compact-wrapper">
      <Link to="#" className="story-compact-body">
        <div className="story-compact-icon">
          <i className="fas fa-file-alt"></i>
        </div>
        <main className="story-compact-main">
          <h2 className="bold title">{story.title}</h2>
          <h4 className="subtitle">{story.author}</h4>
          <p className="subtitle">{story.created_at}</p>
        </main>
      </Link>
    </div>
  )
}

export default StoryCompact
