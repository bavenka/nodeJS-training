import connect from '../database/connect';

import Review from './Review';

const {
  sequelize,
  Sequelize
} = connect;

const Product = sequelize.define('Product', {
  name: Sequelize.STRING,
  price: Sequelize.INTEGER,
}, { timestamps: false });

Product.hasMany(Review);
Review.belongsTo(Product);

export default Product;
