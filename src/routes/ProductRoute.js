import express from 'express';

import * as productController from '../controllers/ProductController';


const productRoute = express.Router();

productRoute.get('/', productController.getProducts);
productRoute.get('/:id', productController.getProduct);
productRoute.get('/:id/reviews', productController.getProductReviews);
productRoute.post('/', productController.addProduct);
productRoute.delete('/:id', productController.removeProduct);

export default productRoute;
