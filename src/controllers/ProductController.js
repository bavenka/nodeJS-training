import {
  createProduct,
  getAllProducts,
  getProductById,
  getProductReviewsById,
} from '../services/productService';

export const getProducts = (req, res) => getAllProducts()
  .then((data) => res.status(200).json(data))
  .catch(e => res.status(500).json({ error: e.message }));

export const getProduct = (req, res) => {
  const { id } = req.params;

  getProductById(Number(id))
    .then(data =>res.status(200).json(data))
    .catch(e => res.status(500).json({ error: e.message }))
};

export const getProductReviews = (req, res) => {
  const { id } = req.params;

  getProductReviewsById(Number(id))
    .then(data => res.status(200).json(data))
    .catch(e => res.status(500).json({ error: e.message }))

};

export const addProduct = (req, res) => {
  const product = req.body;
  createProduct(product)
    .then(data => res.status(200).json(data))
    .catch(e => res.status(500).json({ error: e.message }))

};
