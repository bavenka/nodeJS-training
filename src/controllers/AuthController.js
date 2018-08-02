import { auth } from '../services/authService';


export const authenticate = (req, res) => {
  const reqUser = req.body;
  const { login, password } = reqUser;
  auth(login, password)
    .then(data => {
      const { code } = data;
      res.status(code).json(data);
    })
    .catch(e => res.status(500).json({ error: e.message }))
};
