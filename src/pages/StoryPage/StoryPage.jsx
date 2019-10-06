import React from 'react'
import './StoryPage.scss'
import DisplayWrapper from '../../layouts/DisplayWrapper/DisplayWrapper'
import Story from '../../components/Story/Story'

const story = {
  title: "This is the title of a story",
  body: `Lorem ipsum dolor amet gastropub crucifix gluten-free letterpress ugh. Activated charcoal bushwick man bun chicharrones next level neutra pinterest shoreditch yuccie vinyl. Everyday carry slow-carb squid, hot chicken chartreuse next level bitters try-hard pickled knausgaard health goth beard authentic keytar. Master cleanse gluten-free copper mug lo-fi adaptogen. Hammock disrupt mustache, bespoke stumptown food truck semiotics affogato. Marfa fixie single-origin coffee health goth keffiyeh drinking vinegar pour-over, truffaut aesthetic. YOLO gluten-free master cleanse fashion axe truffaut.

  Aesthetic pop-up shaman, viral thundercats slow-carb kitsch raw denim squid yuccie bushwick brunch. Aesthetic art party banjo kombucha, lo-fi tumblr green juice cray hell of readymade kogi bitters. Wayfarers VHS food truck, keytar air plant jean shorts cred. Taiyaki disrupt organic banjo, single-origin coffee marfa art party heirloom. Chicharrones brunch neutra biodiesel man braid butcher.
  
  Deep v small batch poutine fixie fam aesthetic. Roof party hammock organic semiotics. Asymmetrical mlkshk keffiyeh heirloom, polaroid gluten-free knausgaard photo booth farm-to-table cold-pressed 3 wolf moon quinoa. Shoreditch pabst chia austin direct trade. Authentic fanny pack pork belly you probably haven't heard of them normcore YOLO health goth viral flexitarian. Squid deep v pork belly neutra salvia polaroid ramps intelligentsia helvetica kitsch raclette. Bicycle rights bushwick butcher organic marfa, narwhal austin hammock paleo farm-to-table glossier aesthetic kitsch echo park.
  
  Marfa etsy farm-to-table coloring book umami keffiyeh seitan. Quinoa umami blue bottle tilde. Organic meditation whatever, next level edison bulb succulents occupy mumblecore health goth helvetica. Actually shaman flexitarian jianbing paleo bespoke twee shabby chic. Kale chips XOXO poutine, brooklyn fanny pack bicycle rights butcher waistcoat humblebrag leggings twee. Sartorial thundercats readymade tbh. Chillwave green juice enamel pin unicorn celiac hexagon portland mustache bespoke.
  
  Chicharrones jean shorts neutra mumblecore hell of occupy heirloom messenger bag small batch asymmetrical pug. Offal tbh swag scenester, brooklyn vinyl readymade. Jean shorts bitters DIY small batch pork belly. Ennui vegan 90's small batch neutra food truck lo-fi hammock.
  
  Oh. You need a little dummy text for your mockup? How quaint.
  
  I bet you’re still using Bootstrap too…
  
  Lorem ipsum dolor amet gastropub crucifix gluten-free letterpress ugh. Activated charcoal bushwick man bun chicharrones next level neutra pinterest shoreditch yuccie vinyl. Everyday carry slow-carb squid, hot chicken chartreuse next level bitters try-hard pickled knausgaard health goth beard authentic keytar. Master cleanse gluten-free copper mug lo-fi adaptogen. Hammock disrupt mustache, bespoke stumptown food truck semiotics affogato. Marfa fixie single-origin coffee health goth keffiyeh drinking vinegar pour-over, truffaut aesthetic. YOLO gluten-free master cleanse fashion axe truffaut.

  Aesthetic pop-up shaman, viral thundercats slow-carb kitsch raw denim squid yuccie bushwick brunch. Aesthetic art party banjo kombucha, lo-fi tumblr green juice cray hell of readymade kogi bitters. Wayfarers VHS food truck, keytar air plant jean shorts cred. Taiyaki disrupt organic banjo, single-origin coffee marfa art party heirloom. Chicharrones brunch neutra biodiesel man braid butcher.
  
  Deep v small batch poutine fixie fam aesthetic. Roof party hammock organic semiotics. Asymmetrical mlkshk keffiyeh heirloom, polaroid gluten-free knausgaard photo booth farm-to-table cold-pressed 3 wolf moon quinoa. Shoreditch pabst chia austin direct trade. Authentic fanny pack pork belly you probably haven't heard of them normcore YOLO health goth viral flexitarian. Squid deep v pork belly neutra salvia polaroid ramps intelligentsia helvetica kitsch raclette. Bicycle rights bushwick butcher organic marfa, narwhal austin hammock paleo farm-to-table glossier aesthetic kitsch echo park.
  
  Marfa etsy farm-to-table coloring book umami keffiyeh seitan. Quinoa umami blue bottle tilde. Organic meditation whatever, next level edison bulb succulents occupy mumblecore health goth helvetica. Actually shaman flexitarian jianbing paleo bespoke twee shabby chic. Kale chips XOXO poutine, brooklyn fanny pack bicycle rights butcher waistcoat humblebrag leggings twee. Sartorial thundercats readymade tbh. Chillwave green juice enamel pin unicorn celiac hexagon portland mustache bespoke.
  
  Chicharrones jean shorts neutra mumblecore hell of occupy heirloom messenger bag small batch asymmetrical pug. Offal tbh swag scenester, brooklyn vinyl readymade. Jean shorts bitters DIY small batch pork belly. Ennui vegan 90's small batch neutra food truck lo-fi hammock.
  
  Oh. You need a little dummy text for your mockup? How quaint.
  
  I bet you’re still using Bootstrap too…
  
  Lorem ipsum dolor amet gastropub crucifix gluten-free letterpress ugh. Activated charcoal bushwick man bun chicharrones next level neutra pinterest shoreditch yuccie vinyl. Everyday carry slow-carb squid, hot chicken chartreuse next level bitters try-hard pickled knausgaard health goth beard authentic keytar. Master cleanse gluten-free copper mug lo-fi adaptogen. Hammock disrupt mustache, bespoke stumptown food truck semiotics affogato. Marfa fixie single-origin coffee health goth keffiyeh drinking vinegar pour-over, truffaut aesthetic. YOLO gluten-free master cleanse fashion axe truffaut.

  Aesthetic pop-up shaman, viral thundercats slow-carb kitsch raw denim squid yuccie bushwick brunch. Aesthetic art party banjo kombucha, lo-fi tumblr green juice cray hell of readymade kogi bitters. Wayfarers VHS food truck, keytar air plant jean shorts cred. Taiyaki disrupt organic banjo, single-origin coffee marfa art party heirloom. Chicharrones brunch neutra biodiesel man braid butcher.
  
  Deep v small batch poutine fixie fam aesthetic. Roof party hammock organic semiotics. Asymmetrical mlkshk keffiyeh heirloom, polaroid gluten-free knausgaard photo booth farm-to-table cold-pressed 3 wolf moon quinoa. Shoreditch pabst chia austin direct trade. Authentic fanny pack pork belly you probably haven't heard of them normcore YOLO health goth viral flexitarian. Squid deep v pork belly neutra salvia polaroid ramps intelligentsia helvetica kitsch raclette. Bicycle rights bushwick butcher organic marfa, narwhal austin hammock paleo farm-to-table glossier aesthetic kitsch echo park.
  
  Marfa etsy farm-to-table coloring book umami keffiyeh seitan. Quinoa umami blue bottle tilde. Organic meditation whatever, next level edison bulb succulents occupy mumblecore health goth helvetica. Actually shaman flexitarian jianbing paleo bespoke twee shabby chic. Kale chips XOXO poutine, brooklyn fanny pack bicycle rights butcher waistcoat humblebrag leggings twee. Sartorial thundercats readymade tbh. Chillwave green juice enamel pin unicorn celiac hexagon portland mustache bespoke.
  
  Chicharrones jean shorts neutra mumblecore hell of occupy heirloom messenger bag small batch asymmetrical pug. Offal tbh swag scenester, brooklyn vinyl readymade. Jean shorts bitters DIY small batch pork belly. Ennui vegan 90's small batch neutra food truck lo-fi hammock.
  
  Oh. You need a little dummy text for your mockup? How quaint.
  
  I bet you’re still using Bootstrap too…`,
  username: "StoriesAfterMidnight",
  tags: ["scary", "horror", "creepypasta", "detective"],
  genre: ["dark web", "hunter"],
  notes: "You can use this whenever you want"
}

const StoryPage = () => {
  return (
    <DisplayWrapper header={true}>
      <Story story={story}/>
    </DisplayWrapper>
  )
}

export default StoryPage
