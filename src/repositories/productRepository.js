import Product from '../models/Product';

export const create = (product) => Product.create(product);

export const getById = (id) => Product.findOne({
  where: {
    id,
  }
});

export const getByName = (name) => Product.findOne({
  where: {
    name,
  }
});

export const getAll = () => Product.findAll();
