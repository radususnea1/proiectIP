import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import routes from './appRoutes.js';

import React, { PropTypes } from 'react';
import SignUpForm from '../components/signUpForm.jsx';


class SignUpPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      errors: {},
      user: {
        email: '',
        name: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);import React, { PropTypes } from 'react';
    import SignUpForm from '../components/signUpForm.jsx';


    class SignUpPage extends React.Component {
      constructor(props, context) {
        super(props, context);

        this.state = {
          errors: {},
          user: {
            email: '',
            name: '',
            password: ''
          }
        };

        this.processForm = this.processForm.bind(this);
        this.changeUser = this.changeUser.bind(this);import React, { PropTypes } from 'react';
        import SignUpForm from '../components/signUpForm.jsx';


        class SignUpPage extends React.Component {
          constructor(props, context) {
            super(props, context);

            this.state = {
              errors: {},
              user: {
                email: '',
                name: '',
                password: ''
              }
            };

            this.processForm = this.processForm.bind(this);
            this.changeUser = this.changeUser.bind(this);import React, { PropTypes } from 'react';
            import SignUpForm from '../components/signUpForm.jsx';


            class SignUpPage extends React.Component {
              constructor(props, context) {
                super(props, context);

                this.state = {
                  errors: {},
                  user: {
                    email: '',
                    name: '',
                    password: ''
                  }
                };

                this.processForm = this.processForm.bind(this);
                this.changeUser = this.changeUser.bind(this);import React, { PropTypes } from 'react';
                import SignUpForm from '../components/signUpForm.jsx';


                class SignUpPage extends React.Component {
                  constructor(props, context) {
                    super(props, context);

                    this.state = {
                      errors: {},
                      user: {
                        email: '',
                        name: '',
                        password: ''
                      }
                    };

                    this.processForm = this.processForm.bind(this);
                    this.changeUser = this.changeUser.bind(this);import React, { PropTypes } from 'react';
                    import SignUpForm from '../components/signUpForm.jsx';


                    class SignUpPage extends React.Component {
                      constructor(props, context) {
                        super(props, context);

                        this.state = {
                          errors: {},
                          user: {
                            email: '',
                            name: '',
                            password: ''
                          }
                        };

                        this.processForm = this.processForm.bind(this);
                        this.changeUser = this.changeUser.bind(this);import React, { PropTypes } from 'react';
                        import SignUpForm from '../components/signUpForm.jsx';


                        class SignUpPage extends React.Component {
                          constructor(props, context) {
                            super(props, context);

                            this.state = {
                              errors: {},
                              user: {
                                email: '',
                                name: '',
                                password: ''
                              }
                            };

                            this.processForm = this.processForm.bind(this);
                            this.changeUser = this.changeUser.bind(this);
injectTapEventPlugin();
ReactDOM.render((
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Router history={browserHistory} routes={routes} />
  </MuiThemeProvider>
), document.getElementById('react-app'))