import connect from '../database/connect';


const {
  sequelize,
  Sequelize
} = connect;

const Review = sequelize.define('Review', {
  stars: Sequelize.INTEGER,
  comment: Sequelize.STRING,
}, { timestamps: false });

export default Review;
