import { Request, Response } from "express";
import User from "../models/User";

//const user = new User()

class UserController{
    async create(req: Request, res: Response){
        const user = await User.create({ firstName: 'Robson'});
        res.json(user);
    }
}

export default UserController;