import passport from 'passport';

const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;

import {
  googleUtils,
  facebookUtils,
  twitterUtils,
} from '../config'

import {users} from '../controllers/UserController';


passport.use(new LocalStrategy({
    usernameField: 'login',
  },
  (login, password, cb) => {

    const user = users.find(user => user.login = login && user.password === password);

    if (!user) {

      const error = {success: false, msg: 'Login Failed'};

      return cb(error);
    }

    return cb(null, user);
  }
));

passport.use(new FacebookStrategy({
    clientID: facebookUtils.clientId,
    clientSecret: facebookUtils.clientSecret,
    callbackURL: facebookUtils.callbackURL,
    profileFields: ['id', 'displayName', 'emails']
  },
  (accessToken, refreshToken, profile, cb) => {

    const { emails } = profile;

    const user = users.find(user => user.email === emails[0].value);

    if (!user) {

      const error = {success: false, msg: 'Login Failed'};

      return cb(error, null);
    }

    return cb(null, profile);
  }
));

passport.use(new TwitterStrategy({
    consumerKey: twitterUtils.consumerKey,
    consumerSecret: twitterUtils.consumerSecret,
    callbackURL: twitterUtils.callbackURL,
    includeEmail: true,
  },
  (token, tokenSecret, profile, cb) => {

    const { emails } = profile;

    const user = users.find(user => user.email === emails[0].value);

    if (!user) {

      const error = {success: false, msg: 'Login Failed'};

      return cb(error, null);
    }

    return cb(null, profile);
  }
));

passport.use(new GoogleStrategy({
    clientID: googleUtils.clientId,
    clientSecret: googleUtils.clientSecret,
    callbackURL: googleUtils.callbackURL
  },
  (accessToken, refreshToken, profile, cb) => {

    const { emails } = profile;

    const user = users.find(user => user.email === emails[0].value);

    if (!user) {

      const error = {success: false, msg: 'Login Failed'};

      return cb(error, null);
    }

    return cb(null, profile);
  }
));
