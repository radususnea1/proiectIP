import React from 'react';
import Base from './components/base.jsx';
import HomePage from './components/homePage.jsx';
import DashboardPage from './containers/dashboardPage.jsx';
import LoginPage from './containers/loginPage.jsx';
import SignUpPage from './containers/signUpPage.jsx';
import Auth from './modules/auth';

import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';

const routes = () => {
  return (
    <Router>
      <div>
        <hr/>
          <Match exactly pattern='/' component={Base}/>
          <Match pattern='/DashboardPage' component={DashboardPage}/>
          <Match pattern='/LoginPage' component={LoginPage}/>
      </div>
    </Router>
  );
};

export default routes;

// export default routes;

// const routes =  {
//   component: Base,
//   childRoutes: [
//     {
//       path: '/',
//       getComponent: (location, callback) => {
//         if (Auth.isUserAuthenticated()) {
//           callback(null, DashboardPage);
//         } else {
//           callback(null, HomePage);
//         }
//       }
//     },
//     {
//       path: '/login',
//       component: LoginPage
//     },

//     {
//       path: '/signup',
//       component: SignUpPage
//     },

//     {
//       path: '/logout',
//       onEnter: (nextState, replace) => {
//         Auth.deauthenticateUser();

//         // change the current URL to /
//         replace('/');
//       }
//     }

//   ]
// };