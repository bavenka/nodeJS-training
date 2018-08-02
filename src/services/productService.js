import {
  create,
  getAll,
  getById,
  getByName,
} from '../repositories/productRepository';

export const createProduct = async (product) => {
  try {
    const currentProduct = await getByName(product.name);

    if (currentProduct) {
      throw new Error(`Product with name=${product.name} already exists`);
    }

    return create(product);
  }catch (e) {
    throw e;
  }
};

export const getAllProducts = () => getAll();

export const getProductById = (id) => getById(id);

export const getProductReviewsById = async (id) => {
  const currentProduct = await getById(id);
  if (!currentProduct) {
    return null;
  }

  return currentProduct.getReviews();
};
