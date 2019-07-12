class Auth {

    static authenticateUser(token) {
        localStorage.setItem('token', token);
    }

    static isUserAuthenticated() {
        return localStorage.getItem('token') !== null;
    }

    static deauthenticateUser() {
        localStorage.removeItem('token');
    }

    static getToken() {
        return localStorage.getItem('token');
    }

}

export default Auth;
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