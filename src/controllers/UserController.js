const users = [
  { "id": 1, "name": "pavel", "age": "22" },
  { "id": 2, "name": "denis", "age": "25" },
  { "id": 3, "name": "alex", "age": "21" }
];

export const getUsers = (req, res, next) => {
  res.status(200).json(users);
};
