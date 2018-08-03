import User from '../models/User';

export const getAll = () => User.find();

export const removeById = (id) => User.findOneAndRemove(id);
