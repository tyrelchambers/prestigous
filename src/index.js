import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import LogRocket from 'logrocket';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'mobx-react';
import './globals.scss';
import Home from './pages/Home/Home';
import CreateProfile from './pages/CreateProfile/CreateProfile';
import Signup from './pages/Signup/Signup';
import Writer from './pages/Dashboard/Writer/Writer';
import CreateStory from './pages/CreateStory/CreateStory';
import DashIndex from './pages/Dashboard/DashIndex/DashIndex';
import EditProfile from './pages/EditProfile/EditProfile';

// creativesocial.app
// prestigious.app

const PrivateRoute = ({ component: Component, ...rest }) => {
  let token = window.localStorage.getItem('token');
  return (
    <Route
    {...rest}
    render={props =>
      token ? (
        <Component {...props} />
        ) : (
          <React.Fragment>
            <Redirect
              to={{
                pathname: "/signup",
                state: { from: props.location }
              }}
            />
          </React.Fragment>   
        )
      }
    />
  );
}

ReactDOM.render(
  <Provider>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/create_profile" component={CreateProfile} />
        <Route exact path="/signup" component={Signup} />
        <PrivateRoute path="/dashboard" component={DashIndex}/>
        <PrivateRoute path="/story/create" component={CreateStory} />
        <PrivateRoute path="/edit_profile" component={EditProfile}/>
      </Switch>
    </Router>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
