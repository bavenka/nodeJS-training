import express from 'express';
import passport from 'passport';
import session from 'express-session';

import { UserRoute, ProductRoute, AuthRoute } from './src/routes';

import cookieParser from './src/middlewares/parsers/cookieParser';
import queryParser from './src/middlewares/parsers/queryParser';


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser);
app.use(queryParser);
app.use(passport.initialize());
app.use(session({
  secret: 'Secret',
  resave: true,
  saveUninitialized: true
}));

app.use('/api', AuthRoute);
app.use('/api', UserRoute);
app.use('/api', ProductRoute);

export default app;
