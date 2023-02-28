import User from '../models/User';
import { ModelStatic } from 'sequelize';
import UserSchema from './schemas/UserSchema';
import IError from '../interfaces/IError';

class UserService {
    private static _model: ModelStatic<User> = User;

    static async register(userData: User): Promise<User | Error> {
        const { error, value } = UserSchema.validate(userData);
        const { passwordRe, ...dataValidated } = value;

        console.log(error);

        if(error) {
            const errorMessage: string = error.message;
            throw new Error(errorMessage);
        }

        const user =  await UserService._model.create(dataValidated);
        return user;
    }

}

export default UserService;