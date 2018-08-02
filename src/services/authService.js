import { getByLoginAndPassword } from '../repositories/userRepository';
import { jwtUtils } from '../config';
import jwt from 'jsonwebtoken';


export const auth = async (login, password) => {
  try {
    const user = await getByLoginAndPassword(login, password);

    if (user) {
      const { email, name: username } = user;
      const token = jwt.sign({
        user: { login, password }
      }, jwtUtils.secret, jwtUtils.options);

      return {
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
    }

    return {
      code: 404,
      message: 'Not Found',
    };
  } catch (e) {
    throw e;
  }
};
