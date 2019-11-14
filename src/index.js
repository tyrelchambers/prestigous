import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { Auth0Provider, useAuth0 } from "./react-auth0-wrapper";
import config from "./auth_config.json";

import './globals.scss';
import Home from './pages/Home/Home';
import CreateProfile from './pages/CreateProfile/CreateProfile';
import Signup from './pages/Signup/Signup';
import CreateStory from './pages/CreateStory/CreateStory';
import DashIndex from './pages/Dashboard/DashIndex/DashIndex';
import EditProfile from './pages/EditProfile/EditProfile';
import Inbox from './pages/Inbox/Inbox';
import StoryPage from './pages/StoryPage/StoryPage';
import UserStore from './stores/UserStore';
import StoryStore from './stores/StoryStore';
import Cookies from 'js-cookie';
import Axios from 'axios';
import PreviewStory from './pages/PreviewStory/PreviewStory';
import { getProfile, getCookieFromDb } from './api/users/profile';
import ProfileStories from './pages/ProfileStories/ProfileStories';
import { DraftsPage } from './pages/DraftsPage/DraftsPage';

const stores = {
  UserStore,
  StoryStore
}

const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const { loading, isAuthenticated, loginWithRedirect } = useAuth0();


  useEffect(() => {
    if (loading || isAuthenticated) {
      return;
    }
    const fn = async () => {
      await loginWithRedirect({
        appState: { targetUrl: path }
      });
    };
    fn();
  }, [loading, isAuthenticated, loginWithRedirect, path]);

  const render = props => isAuthenticated === true ? <Component {...props} /> : null;

  return <Route path={path} render={render} {...rest} />;
};

const CallbackRoute = () => {
  const sessionCookie = Cookies.get("sid");
  const { isAuthenticated, user } = useAuth0();

  if ( sessionCookie && isAuthenticated ) {
    (async() => {
      const profile = await getProfile();
      UserStore.setProfile(profile);
    })();

    window.location.href = "/";

  }
  
  if ( !sessionCookie && isAuthenticated ) {
    (async() => {
      const cookie = await getCookieFromDb(user);
      if ( cookie ) {
        Cookies.set("sid", cookie, { expires: 1});
      }
    })();
    window.location.href = "/";
  }

  if ( !sessionCookie && !isAuthenticated ) {

    window.location.href = "/";

  }

  return null;
}

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    client_id={config.clientId}
    redirect_uri={window.location.origin}
    onRedirectCallback={onRedirectCallback}
  >
    <Provider {...stores}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/story" component={StoryPage}/>
          <Route path="/callback" component={CallbackRoute}/>
          <PrivateRoute path="/create_profile" component={CreateProfile} />
          <PrivateRoute exact path="/dashboard" component={DashIndex}/>
          <PrivateRoute exact path="/create_story" component={CreateStory} />
          <PrivateRoute path="/edit_profile" component={EditProfile}/>
          <PrivateRoute exact path="/dashboard/inbox" component={Inbox} />
          <PrivateRoute exact path="/story/:title" component={StoryPage} />
          <PrivateRoute exact path="/story/preview/:draftId" component={PreviewStory} />
          <PrivateRoute exact path="/profile/stories" component={ProfileStories} />
          <PrivateRoute exact path="/profile/drafts" component={DraftsPage} />
        </Switch>
      </Router>
    </Provider>
  </Auth0Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
