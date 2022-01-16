const express = require('express');
const itemsRouter = express.Router();
const controller = require('../controllers/ItemsController')
const {VerifyToken, VerifyAdmin} = require('../middlewaree/authMiddleWaree')

itemsRouter.get('/get', VerifyToken, controller.getItems)
itemsRouter.post('/take', VerifyToken, controller.takeItems)
itemsRouter.post('/add', VerifyAdmin, controller.addItem)
itemsRouter.post('/update', VerifyAdmin, controller.updateItem)
itemsRouter.delete('/delete/:itemId', VerifyAdmin, controller.deleteItem)

export {itemsRouter};