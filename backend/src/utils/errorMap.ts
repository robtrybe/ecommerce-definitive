import IErrorMap from "../interfaces/IErrorMap"

const errors: Array<IErrorMap> = [
    { message: 'Não possivel cadastrar usuário', statusCode: 403 },
    { message: 'Usuário cadastrado com sucesso!', statusCode: 201 }
]

export default function getError(msg: string): IErrorMap {
    const err: IErrorMap | undefined =  errors.find((map) => map.message === msg);
    if(!err) return { message:'Mensagem não mapeada', statusCode: 400 };
    return err;
}