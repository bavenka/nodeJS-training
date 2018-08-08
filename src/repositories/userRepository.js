import User from '../models/User';

export const getByLoginAndPassword = (login, password) => User.findOne({
  where: {
    login,
    password,
  }
});

export const getByEmail = (email) => User.findOne({
  where: {
    email,
  }
});

export const getAll = () => User.findAll();

