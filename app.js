import express from 'express';
import bodyParser from 'body-parser';
import { serve, setup } from 'swagger-ui-express';
import swaggerJSON from './src/vendors/swagger.json';

import { UserRoute, ProductRoute, CityRoute } from './src/routes';

import cookieParser from './src/middlewares/parsers/cookieParser';
import queryParser from './src/middlewares/parsers/queryParser';


const swaggerOptions = {
  explorer : true
};

const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cookieParser);
app.use(queryParser);

app.use('/api-swagger', serve, setup(swaggerJSON, swaggerOptions));
app.use('/api/users', UserRoute);
app.use('/api/products', ProductRoute);
app.use('/api/cities', CityRoute);

export default app;
