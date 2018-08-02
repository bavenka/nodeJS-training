import { getAllUsers } from '../services/userService';

export const getUsers = (req, res, next) => {
  getAllUsers()
    .then(data => res.status(200).json(data))
    .catch(e => res.status(500).json({ error: e.message }))
  ;
};
