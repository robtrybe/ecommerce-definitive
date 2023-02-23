import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

/*** Routes ****/

import index from './routes/index.routes';
import userRoutes from './routes/user.routes';

app.use(index);
app.use('/user',userRoutes);

export default app;