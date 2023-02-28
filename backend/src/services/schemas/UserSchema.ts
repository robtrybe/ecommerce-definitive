import Joi, { ObjectSchema } from 'joi';

const UserSchema: ObjectSchema = Joi.object({
    firstName: Joi.string().pattern(/^[a-zà-ú][a-zà-ú\s]+[a-zà-ú]$/i).label('nome').required(),
    lastName: Joi.string().pattern(/^[a-zà-ú][a-zà-ú\s]+[a-zà-ú]$/i).label('sobrenome').required(),
    email: Joi.string().email().label('email').required(),
    password: Joi.string().min(8).label('senha').required(),
    passwordRe: Joi.ref('password'),
}).messages({
    'string:required': 'O campo {{#label}} deve ser informado',
    'string.pattern.base':'{{#label}} inválido',
    'string.email': 'email inválido',
    'string.min':'A {{#label}} deve ter no mínimo 8 caracteres',
    'any.only': 'As senhas não conhecidem',
    'string.empty': 'O campo {{#label}} deve ser informado'
});

export default UserSchema;