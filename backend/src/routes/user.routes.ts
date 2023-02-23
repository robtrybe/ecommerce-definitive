import express from 'express';

import RegisterController,{ UserController } from '../controllers';

const controller = new UserController();

const router = express.Router();

router.post('/create', controller.create.bind(UserController) );

export default router;

