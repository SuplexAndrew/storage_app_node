import {UserCreationDto} from "../../models/dto/UserCreationDto";
import {createAccessToken} from "./createAccessToken";
import {User} from "../../models";
import bcrypt from 'bcrypt'

export const login = async (loginData: UserCreationDto) => {
    const user = await User.findOne({
        where: {login: loginData.login},
        include: {
            all: true, nested: true
        }
    })
    if (!user) {
        throw Error('Пользователь не найден')
    }
    const hashed = await bcrypt.hash(loginData.password, user.salt)
    if (user.password === hashed) {
        const token = createAccessToken(user.id)

        return {user, token}
    }
}