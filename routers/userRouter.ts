const express = require('express');
const userRouter = express.Router();
const controller = require('../controllers/UserController')

userRouter.post('/login', controller.login)
userRouter.post('/registration', controller.registration)

export {userRouter};