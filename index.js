import mongoose from 'mongoose';

import app from './app';
import { mongoUri } from './src/config';


mongoose.connect(mongoUri);
mongoose.Promise = global.Promise;
mongoose.connection
  .on('error', (error) => console.log('MongoDB connection error: ', error))
  .once('open', () => {
    const port = process.env.PORT || 4000;
    app.listen(port, ()=> console.log(`App listening on port ${port}!`));
  });
