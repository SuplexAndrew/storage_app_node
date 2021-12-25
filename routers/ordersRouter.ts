const express = require('express');
const ordersRouter = express.Router();
const controller = require('../controllers/OrdersController')
const {VerifyToken} = require('../middlewaree/authMiddleWaree')

ordersRouter.get('/get', VerifyToken, controller.getOrders)
ordersRouter.post('/add', VerifyToken, controller.createOrder)

export {ordersRouter};