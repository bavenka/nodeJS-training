import Sequelize from 'sequelize';

const sequelize = new Sequelize("postgres://postgres:root@localhost:5434/database_development");

const connect = {
  sequelize,
  Sequelize,
};
export default connect;
