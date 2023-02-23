import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

/*** Routes ****/

import index from './routes/index.routes';

app.use(index);

export default app;