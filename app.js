import express from 'express';
import bodyParser from 'body-parser';

import { UserRoute, ProductRoute, CityRoute } from './src/routes';

import cookieParser from './src/middlewares/parsers/cookieParser';
import queryParser from './src/middlewares/parsers/queryParser';


const app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cookieParser);
app.use(queryParser);

app.use('/api/users', UserRoute);
app.use('/api/products', ProductRoute);
app.use('/api/cities', CityRoute);

export default app;
