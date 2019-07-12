import React from 'react';
import Base from './components/base.jsx';
import HomePage from './components/homePage.jsx';
import DashboardPage from './containers/dashboardPage.jsx';
import LoginPage from './containers/loginPage.jsx';
import SignUpPage from './containers/signUpPage.jsx';
import Auth from './modules/auth';

const routes = {
    component: Base,
    childRoutes: [

        {
            path: '/',
            getComponent: (location, callback) => {
                if (Auth.isUserAuthenticated()) {
                    callback(null, DashboardPage);
                } else {
                    callback(null, HomePage);
                }
            }
        },

        {
            path: '/login',
            component: LoginPage
        },

        {
            path: '/signup',
            component: SignUpPage
        },

        {
            path: '/logout',
            onEnter: (nextState, replace) => {
                Auth.deauthenticateUser();
                replace('/');
            }
        }

    ]
};

export default routes;
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
                this.changeUser = this.changeUser.bind(this);
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
                                this.changeUser = this.changeUser.bind(this);
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
                                                this.changeUser = this.changeUser.bind(this);
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
                                                                this.changeUser = this.changeUser.bind(this);
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
                                                                                this.changeUser = this.changeUser.bind(this);
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
                                                                                                this.changeUser = this.changeUser.bind(this);
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
                                                                                                                this.changeUser = this.changeUser.bind(this);