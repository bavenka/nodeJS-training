import app from './app';
import connect from './src/database/connect';


const { sequelize } = connect;
const port = process.env.PORT || 3000;

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    app.listen(port, () => console.log(`App listening on port ${port}!`));
  });
