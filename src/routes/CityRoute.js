import express from 'express';

import * as cityController from '../controllers/CityController';


const cityRoute = express.Router();

cityRoute.get('/', cityController.getCities);
cityRoute.post('/', cityController.addCity);
cityRoute.delete('/:id', cityController.removeCity);
cityRoute.put('/', cityController.updateOrCreateCity);

export default cityRoute;
