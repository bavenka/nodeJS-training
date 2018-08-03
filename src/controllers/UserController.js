import { getAll, removeById } from '../services/UserService';


export const getUsers = (req, res, next) => getAll()
  .then(data => res.status(200).json(data))
  .catch(e => res.status(500).json({ error: e.message }));

export const removeUser = (req, res) => removeById(req.params.id)
  .then(data => res.status(200).json(data))
  .catch(e => res.status(500).json({ error: e.message }));
