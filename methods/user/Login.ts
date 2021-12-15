import {LoginDto} from "../../models/dto/loginDto";
import bcrypt from 'bcrypt'
const db = require('../../models')

export const Login = async(loginData: LoginDto) => {
    const user = await db['User'].findOne({ where: {login:loginData.login}})
    const hashed = await bcrypt.hash(loginData.password, user.salt)
    return user.password === hashed ? user : false
}