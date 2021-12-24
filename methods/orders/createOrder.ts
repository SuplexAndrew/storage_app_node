import {OrderDto} from "../../models/dto/OrderDto";
const db = require('../../models')

export const createOrder = async (order: OrderDto) => {
    return db['Orders'].create({})
}