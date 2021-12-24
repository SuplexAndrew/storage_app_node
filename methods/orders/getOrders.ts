const db = require('../../models')

export const getOrders = async() => {
    return await db['Order'].findAll({where: {}})
}