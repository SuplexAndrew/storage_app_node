import {getOrders, createOrder} from "../methods/orders";

module.exports = {
    getOrders: async (req, res) =>
        res.json(await getOrders(req.user.id)),
    createOrder: async (req, res) => {
        const createdOrder = await createOrder(req.body)

        createdOrder ? res.json(createdOrder) : res.status(400).json({message: 'Некорректные данные'})
    }
}