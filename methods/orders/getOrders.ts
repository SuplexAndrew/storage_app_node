import {Item, Status} from "../../models";

const {Order, OrderItem} = require('../../models')

export const getOrders = async (userId: number) => {
    return Order.findAll({
        where: {userId},
        attributes: ['id', 'createdAt'],
        include: [
            {
                model: OrderItem,
                as: 'items',
                attributes: [['itemCount', 'count']],
                include: {model: Item, attributes: ['id', 'name', 'price', 'countInStorage']}
            },
            {
                model: Status,
                attributes: ['title']
            }
        ]
    })
    // return order.map(({id, createdAt, items, status}) => ({
    //     id,
    //     createdAt,
    //     status: status.title,
    //     items: items
    //         .map(({itemCount, item}) => ({
    //             count: itemCount,
    //             id: item.id,
    //             name: item.name,
    //             price: item.price,
    //             countInStorage: item.countInStorage
    //         }))
    // }))
}