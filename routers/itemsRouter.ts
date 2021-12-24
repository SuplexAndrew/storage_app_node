const express = require('express');
const itemsRouter = express.Router();
const controller = require('../controllers/ItemsController')
const {VerifyToken} = require('../middlewaree/authMiddleWaree')

itemsRouter.get('/get', VerifyToken, controller.getAll)

export {itemsRouter};