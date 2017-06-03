// import { express } from 'express';
// import { bodyParser } from 'body-parser';

// import { passport } from 'passport';
// import newconnect from '../server/models/index.js';

let localSignupStrategy = require('../server/passport/local-signup');
let localLoginStrategy = require('../server/passport/local-login');

// import { localSignupStrategy } from '../server/passport/local-signup';
// import { localLoginStrategy } from '../server/passport/local-login';

// import { authCheckMiddleware } from '../server/middleware/auth-check';
// import authRoutes from '../server/routes/auth';
// import { apiRoutes } from '../server/routes/api';

let authCheckMiddleware = require('../server/middleware/auth-check');
let authRoutes = require('../server/routes/auth');
let apiRoutes = require('../server/routes/api');

const dbUri = "mongodb://localhost/react_app";
const jwtSecret = "My secret and mine alone!";

// newconnect(dbUri);

let passport = require('passport');

let bodyParser = require('body-parser');
let express = require('express');
let app = express();
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.get('env');

passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

app.use('/api', authCheckMiddleware);
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

app.listen(3000, function () {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});
