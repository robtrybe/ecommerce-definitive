import { Request, Response } from "express";

class RegisterController {
    public register(req:Request, res: Response) {
      res.json({ message: 'Olá!'});
    }
}

export default RegisterController;