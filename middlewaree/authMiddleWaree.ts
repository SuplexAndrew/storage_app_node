import jwt, {JwtPayload} from 'jsonwebtoken'
import {checkAdminRole} from "../methods/user/checkAdminRole";
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
        req.user = jwt.verify(token, secretKey)
        next()
    } catch (e) {
        return res.status(403).json({message: 'Not authorized'})
    }
}

async function VerifyAdmin(req, res, next) {
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
        const decodedUser = jwt.verify(token, secretKey) as JwtPayload
        const adminVerified = await checkAdminRole(decodedUser.id)
        if (adminVerified) {
            req.user = {...decodedUser, adminRights: true}
        } else {
            return res.status(403).json({message: 'Not authorized'})
        }
        next()
    } catch (e) {
        return res.status(403).json({message: 'Not authorized'})
    }
}

export {
    VerifyToken,
    VerifyAdmin
}