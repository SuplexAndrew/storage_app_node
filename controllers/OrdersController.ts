import {getOrders, createOrder} from "../methods/orders";

module.exports = {
    getOrders: async (req, res) =>
        res.json(await getOrders(req.user.id)),
    createOrder: async (req, res) =>
        res.json(await createOrder(req.user.id, req.body)),
}