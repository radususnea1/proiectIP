import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import routes from './appRoutes.js';


injectTapEventPlugin();
ReactDOM.render((
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Router history={browserHistory} routes={routes} />
  </MuiThemeProvider>
), document.getElementById('react-app'))