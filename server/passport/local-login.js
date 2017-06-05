import jsonwebtoken from 'jsonwebtoken';
import User from '../models/user';
import PassportLocalStrategy from 'passport-local';
import config from '../config/index.json';

module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const userData = {
    email: email.trim(),
    password: password.trim()
  };

  return User.findOne({ email: userData.email }, (err, user) => {
    console.log("entered find one" + JSON.stringify(User));
    if (err) { return done(err); }

    if (!user) {
      const error = new Error('Incorrect email or password');
      error.name = 'IncorrectCredentialsError';

      return done(error);
    } else {
      return user.comparePassword(userData.password, (passwordErr, isMatch) => {
      console.log("entered compare passoword");
      if (err) { return done(err); }

      if (!isMatch) {
        const error = new Error('Incorrect email or password');
        error.name = 'IncorrectCredentialsError';

        return done(error);
      }

      const payload = {
        sub: user._id
      };

      const token = jsonwebtoken.sign(payload, config.jwtSecret);
      const data = {
        name: user.name
      };

      return done(null, token, data);
      });
    }

  });
});