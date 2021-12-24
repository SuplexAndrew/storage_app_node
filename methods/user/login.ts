import {UserCreationDto} from "../../models/dto/UserCreationDto";
import {createAccessToken} from "./createAccessToken";
import {User, UserRole} from "../../models";
import bcrypt from 'bcrypt'

export const login = async(loginData: UserCreationDto) => {
    const user = await User.findOne({ where: {login:loginData.login}, include: {model:UserRole, as: 'roles'}})
    const hashed = await bcrypt.hash(loginData.password, user.salt)
    if (user.password === hashed) {
        const token = createAccessToken(user.id)

        return {user, token}
    }
}