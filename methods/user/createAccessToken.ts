import {sign} from 'jsonwebtoken'
require('dotenv').config()

export const createAccessToken = (id) => {
    const secret = process.env.PRIVATE_KEY

    return sign({id}, secret, {expiresIn: '24h'})
}