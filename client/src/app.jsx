import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter } from 'react-router-dom';
import routes from './appRoutes.js';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'


// import Base from './components/base.jsx';
// import HomePage from './components/homePage.jsx';
// import DashboardPage from './containers/dashboardPage.jsx';
// import LoginPage from './containers/loginPage.jsx';
// import SignUpPage from './containers/signUpPage.jsx';
// import Auth from './modules/auth';

// remove tap delay, essential for MaterialUI to work properly
// injectTapEventPlugin();

console.log("helloo");

ReactDOM.render((
  <BrowserRouter routes={routes} />
), document.getElementById('react-app'))


{/*<Router >
  <Route path = "/" component = {Base}>
     <IndexRoute component = {HomePage} />
     <Route path = "home" component = {DashboardPage} />
     <Route path = "about" component = {LoginPage} />
     <Route path = "contact" component = {Auth} />
  </Route>
</Router>*/}

  // <routes />,
  // document.getElementById('react-app')
  // <BrowserRouter routes={routes} />,
  /*<MuiThemeProvider muiTheme={getMuiTheme()}>
  </MuiThemeProvider>),*/
    // document.getElementById('react-app')