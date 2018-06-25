import express from 'express';
import passport from 'passport';

import {jwtUtils} from "../config";
import {signToken} from "../middlewares/signJwt";
import '../helpers/strategies';

import * as authController from '../controllers/AuthController';


const authRoute = express.Router();

authRoute.post('/auth', authController.authenticate);

authRoute.post('/auth/local', (req, res) => signToken(req, res, 'local'));

authRoute.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));

authRoute.get('/auth/google/callback',(req, res) => signToken(req, res, 'google'));

authRoute.get('/auth/facebook', passport.authenticate('facebook', { scope : ['email'] }));

authRoute.get('/auth/facebook/callback',(req, res) => signToken(req, res, 'facebook'));

authRoute.get('/auth/twitter', passport.authenticate('twitter', { scope : ['email'] }));

authRoute.get('/auth/twitter/callback',(req, res) => signToken(req, res, 'twitter'));


export default authRoute;
