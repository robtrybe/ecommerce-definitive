import TError from './TError';
import TUser from './TUser';

type TValidateDataResult = {
    error?: TError
    value?: any
    statusCode: number
}

export default TValidateDataResult; 