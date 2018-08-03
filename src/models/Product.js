import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  lastModifiedDate: {
    type: Date,
    default: Date.now,
  },
  reviews: {
    type: Array,
    default: []
  }
});

const Product = mongoose.model('Product', productSchema);

export default Product;
