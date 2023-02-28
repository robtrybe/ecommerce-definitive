import express from 'express';

import RegisterController,{ UserController } from '../controllers';

const controller = new UserController();

const router = express.Router();

router.post('/', controller.register.bind(UserController) );

export default router;

