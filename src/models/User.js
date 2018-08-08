import connect from '../database/connect';


const {
  sequelize,
  Sequelize
} = connect;

const User = sequelize.define('User', {
  login: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  name: Sequelize.STRING,
  age: Sequelize.INTEGER,
}, { timestamps: false });

export default User;
