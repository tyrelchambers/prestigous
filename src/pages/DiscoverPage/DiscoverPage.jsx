import React, { useState, useEffect } from 'react'
import DisplayWrapper from '../../layouts/DisplayWrapper/DisplayWrapper'
import './DiscoverPage.scss'
import StoryFilters from '../../components/StoryFilters/StoryFilters';
import { allStories } from '../../api/stories/stories';
import { subDays, subHours } from 'date-fns';
import { subYears, subMonths } from 'date-fns/esm';
import FeaturedStory from '../../layouts/FeaturedStory/FeaturedStory';


export const DiscoverPage = ({location}) => {
  const [ stories, setStories ] = useState();
  const [ loading, setLoading ] = useState(true);

  const params = new URLSearchParams(location.search);

  const options = {
    ...(params.has("theme") && {theme: params.get("theme")}),
  }

  const getTimeframe = () => {
    let time = Date.now();

    switch(params.get('t')) {
      case "day":
        time = subDays(time, 1);
        break;
      case "hour":
        time = subHours(time, 1);
        break;
      case "year":
        time = subYears(time, 1);
        break;
      case "month":
        time = subMonths(time, 1);
        break;
      
      default:
        time = Date.now();
    }

    return time;
  }

  useEffect(() => {
    const fn = async () => {
      if (params.has("t")) {
        const timeframe = getTimeframe();
        options.t = timeframe;
      }
      const query =  Object
                      .keys(options)
                      .map(k => k + '=' + options[k])
                      .join('&');
      const data = await allStories(query);
      setStories([...data.data]);
      setLoading(false);
    }
    fn();
  }, [location.search])

  const storyList = !loading ? stories.map((x, id) => <FeaturedStory key={id} story={x}/>) : null;

  return (
    <DisplayWrapper header={true}>
      <div className="p-- discover-wrapper">
        <h1 className="title ta-c">Discover new &amp; great stories!</h1>

        <section className="d-f fxd-c">
          <div className="d-f ai-c w-100pr">
            <hr className="hr"/>
            <StoryFilters
              params={params}
            />
          </div>

          <div className="d-f">
            {storyList}
          </div>
        </section>
      </div>
    </DisplayWrapper>
  )
}
