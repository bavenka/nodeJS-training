import {
  getAll,
  getById,
  createProduct,
  getProductReviewsById,
  removeById,
} from '../services/ProductService';


export const getProducts = (req, res) => getAll()
  .then(data => res.status(200).json(data))
  .catch(e => res.status(500).json({ error: e.message }));

export const getProduct = (req, res) => getById(req.params.id)
  .then(data => res.status(200).json(data))
  .catch(e => res.status(500).json({ error: e.message }));

export const getProductReviews = (req, res) => getProductReviewsById(req.params.id)
  .then(data => res.status(200).json(data))
  .catch(e => res.status(500).json({ error: e.message }));

export const addProduct = (req, res) => createProduct(req.body)
  .then(data => res.status(200).json(data))
  .catch(e => res.status(500).json({ error: e.message }));

export const removeProduct = (req, res) => removeById(req.params.id)
  .then(data => res.status(200).json(data))
  .catch(e => res.status(500).json({ error: e.message }));
