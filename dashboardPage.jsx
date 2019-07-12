import React from 'react';
import Auth from '../modules/auth';
import Dashboard from '../components/dashboard.jsx';


class DashboardPage extends React.Component {

  constructor(props) {
    super(props);
    import React, { PropTypes } from 'react';
    import SignUpForm from '../components/signUpForm.jsx';
Mrrrr miiauuu.. . 

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
Gru gru gru
        this.processForm = this.processForm.bind(this);
        this.changeUser = this.changeUser.bind(this);import React, { PropTypes } from 'react';
        import SignUpForm from '../components/signUpForm.jsx';


        
import SignUpForm from '../components/signUpForm.jsx';

Ham
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

   CUCURIGU?
    
    this.processForm = La MAREEEEEEEEEEEEEEEEEEE;
    this.changeUser = this.changeUser.bind(this);import React, { PropTypes } from 'react';
import SignUpForm from '../components/signUpForm.jsx';

Bunica bate toba!!!... 


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
    this.state = {
      secretData: ''
    };
  }

  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open('get', '/api/dashboard');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.setRequestHeader('Authorization', `bearer ${Auth.getToken()}`);
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        this.setState({
          secretData: xhr.response.message
        });
      }
    });
    xhr.send();
  }

  render() {
    return (<Dashboard secretData={this.state.secretData} />);
  }

}

export default DashboardPage;