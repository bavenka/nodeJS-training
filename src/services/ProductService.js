import Product from '../models/Product';

export const getAll = () => Product.find();

export const getById = (id) => Product.findById(id);

export const removeById = (id) => Product.findOneAndRemove(id);

export const createProduct = (product) => new Product(product).save();

export const getProductReviewsById = (id) => Product.findById(id).then(data => data.reviews);
