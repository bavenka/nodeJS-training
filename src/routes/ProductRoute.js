import express from 'express';

import verifyJwt from '../middlewares/verifyJwt';
import * as productController from '../controllers/ProductController';


const productRoute = express.Router();

productRoute.get('/products', verifyJwt, productController.getProducts);
productRoute.get('/products/:id', verifyJwt, productController.getProduct);
productRoute.get('/products/:id/reviews', verifyJwt, productController.getProductReviews);
productRoute.post('/products', verifyJwt, productController.addProduct);

export default productRoute;
