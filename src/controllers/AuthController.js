import jwt from 'jsonwebtoken';
import { jwtUtils } from '../../src/config';

import { users } from './UserController';


export const authenticate = (req, res) => {
  const reqUser = req.body;
  const { login, password } = reqUser;

  const user = users.find(user => user.login = login && user.password === password);

  let responseBody = null;

  if (user) {
    const { email, name: username } = user;
    const token = jwt.sign({
      user: reqUser
    }, jwtUtils.secret, jwtUtils.options);

    responseBody = {
      code: 200,
      message: 'OK',
      data: {
        user: {
          email: email,
          username,
        }
      },
      token,
    };

    res.status(200).json(responseBody);
  } else {

    responseBody = {
      code: 404,
      message: 'Not Found',
    };

    res.status(404).json(responseBody);
  }

};
