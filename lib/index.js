import {newconnect} from '../server/models/index.js';


let passport = require('passport');

let bodyParser = require('body-parser');
let express = require('express');
let app = express();
app.use(express.static('./server/static/'));


passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

app.use('/api', authCheckMiddleware);
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

app.listen(3000, function () {
  console.log('Server is running on http://localhost:3000 or http://127.0.0.1:3000');
});
