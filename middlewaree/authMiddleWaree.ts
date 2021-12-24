import jwt from 'jsonwebtoken'
require('dotenv').config()

function VerifyToken(req, res, next) {
    if (req.method === "OPTIONS") {
        next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(403).json({message: 'Not authorized'})
        }
        const secretKey = process.env.PRIVATE_KEY
        if (!secretKey) {
            return res.status(501).json({message: 'Auth problem'})
        }
        const decodedUser = jwt.verify(token, secretKey)
        console.log(decodedUser)
        req.user = decodedUser
        next()
    } catch (e) {
        return res.status(403).json({message: 'Not authorized'})
    }
}

export {
    VerifyToken
}