import {LoginDto} from "../../models/dto/loginDto";
import bcrypt from 'bcrypt'
const db = require('../../models')

export const Registration = async (registrationData: LoginDto) => {
    const salt = await bcrypt.genSalt()
    const hash = await bcrypt.hash(registrationData.password, salt)
    return db['User'].create({login: registrationData.login, password: hash, salt})
}