import express from 'express';

import verifyJwt from '../middlewares/verifyJwt';
import * as userController from '../controllers/UserController';


const userRoute = express.Router();

userRoute.get('/users', verifyJwt, userController.getUsers);

export default userRoute;
