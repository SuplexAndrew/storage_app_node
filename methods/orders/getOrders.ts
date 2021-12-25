const {Order, OrderItem} = require('../../models')

export const getOrders = async(userId:number) => {
    return await Order.findAll({where: {userId}, include: {model: OrderItem, as: 'items'}})
}