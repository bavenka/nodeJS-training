import express from 'express';

import * as productController from '../controllers/ProductController';


const productRoute = express.Router();

productRoute.get('/', productController.getProducts);
productRoute.get('/:id', productController.getProduct);
productRoute.get('/:id/reviews', productController.getProductReviews);
productRoute.post('/', productController.addProduct);

export default productRoute;
