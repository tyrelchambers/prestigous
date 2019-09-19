import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import LogRocket from 'logrocket';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'mobx-react';
import './globals.scss';
import Home from './pages/Home/Home';
import CreateProfile from './pages/CreateProfile/CreateProfile';
import Signup from './pages/Signup/Signup';

ReactDOM.render(
  <Provider>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/create_profile" component={CreateProfile} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
    </Router>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
