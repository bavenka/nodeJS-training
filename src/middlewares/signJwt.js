import jwt from "jsonwebtoken";
import passport from 'passport';

import {jwtUtils} from "../config";


export const signToken = (req, res, authType) =>

  passport.authenticate(authType, { session: false }, (err, user) => {

  if (err) {
    res.status(404).json(err);
  }

  const token = jwt.sign({
    user
  }, jwtUtils.secret, jwtUtils.options);

  return res.status(200).json({success: true, token });

})(req, res, authType);
