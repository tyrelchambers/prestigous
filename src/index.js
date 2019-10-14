import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import LogRocket from 'logrocket';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { Auth0Provider } from "./react-auth0-wrapper";
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
import {useAuth0} from './react-auth0-wrapper'
import UserStore from './stores/UserStore';
import isEmpty from './helpers/emptyObject';
import Cookie from 'js-cookie';
import Axios from 'axios';

const stores = {
  UserStore
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
          <Route path="/callback" render={async () => {
            // checks for SID cookie and if profile is completed
            const cookie = Cookie.get("sid");
            
            if ( cookie ) {
              Axios.get(`${process.env.REACT_APP_BACKEND}/api/profile/getProfile`, {
                  withCredentials: true
                }).then(res => {
                  if ( res.data.profileCreated ) {
                    window.location.href = "/";
                  }
                }).catch(console.log);
            }

            if ( !cookie ) {
              window.location.href = "/create_profile?r=writer";
            }
            
          }}/>
          <PrivateRoute path="/create_profile" component={CreateProfile} />
          <PrivateRoute exact path="/dashboard" component={DashIndex}/>
          <PrivateRoute exact path="/create_story" component={CreateStory} />
          <PrivateRoute path="/edit_profile" component={EditProfile}/>
          <PrivateRoute exact path="/dashboard/inbox" component={Inbox} />
        </Switch>
      </Router>
    </Provider>
  </Auth0Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
