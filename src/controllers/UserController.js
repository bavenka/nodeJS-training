export const users = [
  { id: 1, login: "pavel", email: "bavenka@gmail1.com", password: "test1", name: "pavel", age: 22 },
  { id: 2, login: "denis", email: "denis@mail.ru", password: "test2", name: "denis", age: 25 },
  { id: 3, login: "alex",email: "alex@mail.ru", password: "test3", name: "alex", age: 21 }
];

export const getUsers = (req, res, next) => {
  res.status(200).json(users);
};
