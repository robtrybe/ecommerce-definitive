import TError from "./TError"

type TUser  = {
    id?:number
    firstName: string
    lastName: string
    email: string
    password: string
    passwordRe?: string
    status?: string
    createdAt?: Date
    updatedAt?: Date
}

export default TUser;