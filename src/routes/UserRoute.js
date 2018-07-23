import express from 'express';

import * as userController from '../controllers/UserController';


const userRoute = express.Router();

userRoute.get('/', userController.getUsers);

export default userRoute;
