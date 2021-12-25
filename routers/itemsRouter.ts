const express = require('express');
const itemsRouter = express.Router();
const controller = require('../controllers/ItemsController')
const {VerifyToken, VerifyAdmin} = require('../middlewaree/authMiddleWaree')

itemsRouter.get('/get', VerifyToken, controller.getItems)
itemsRouter.post('/take', VerifyToken, controller.takeItems)
itemsRouter.post('/add', VerifyAdmin, controller.addItem)
itemsRouter.put('/update', VerifyAdmin, controller.updateItem)
itemsRouter.delete('/delete', VerifyAdmin, controller.deleteItem)

export {itemsRouter};