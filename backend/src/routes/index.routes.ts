import express from 'express';

import RegisterController from '../controllers';

const controller = new RegisterController();

const router = express.Router();

router.post('/register', controller.register.bind(RegisterController) );

export default router;