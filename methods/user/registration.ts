import {UserCreationDto} from "../../models/dto/UserCreationDto";
import bcrypt from 'bcrypt'
import {createAccessToken} from "./createAccessToken";
const {User, UserRole, Role} = require('../../models')

export const registration = async (registrationData: UserCreationDto) => {
    const candidate = await User.findOne({where: {login: registrationData.login}})
    console.log(candidate)
    if (candidate) return
    const salt = await bcrypt.genSalt()
    const hash = await bcrypt.hash(registrationData.password, salt)
    const user = await User.create({login: registrationData.login, password: hash, salt})
    console.log(user)
    const role = await Role.findOne({where: {name: 'Пользователь'}})
    await UserRole.create({userId: user.id, roleId: role.id})
    const token = createAccessToken(user.id)
    console.log(token)
    return {user, token}
}