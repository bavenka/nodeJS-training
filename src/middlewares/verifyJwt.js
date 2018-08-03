import jwt from 'jsonwebtoken';
import { jwtUtils } from '../../src/config';

export default function verifyToken  (req, res, next) {
  const token = req.headers['token'];

  return jwt.verify(token, jwtUtils.secret,
    (e) => {
      if (e) {
        res.status(401).json({error: e});
      } else {
        next();
      }
    })
};
