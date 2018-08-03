import express from 'express';

import * as userController from '../controllers/UserController';


const userRoute = express.Router();

userRoute.get('/', userController.getUsers);
userRoute.delete('/:id', userController.removeUser);

export default userRoute;
