const express = require('express');
const userRouter = express.Router();
const controller = require('../controllers/UserController')

userRouter.post('/login', async(req, res) =>
    res.json(await controller.login(req.body)))
userRouter.post('/registration', async(req, res) =>
    res.send(await controller.registration(req.body)))

export {userRouter};