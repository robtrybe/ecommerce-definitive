import { Request, Response } from "express";
import IErrorMap from "../interfaces/IErrorMap";
import UserService from "../services/UserService";
import getError from "../utils/errorMap";

class RegisterController {
    public async register(req:Request, res: Response) {
      const data = req.body;
      try{
        const result = await UserService.register(data);
        res.status(200).json(result);
      }catch(error: any) {
        const errorMessage: string = error.message;
        const mapError: IErrorMap = getError(errorMessage);
        res.status(mapError.statusCode).json({ message: mapError.message});
      }
    }
}

export default RegisterController;