import {OrderDto} from "../../models/dto/OrderDto";
import {OrderItem, sequelize, Order, Status} from "../../models";
import {takeItems} from "../items";

export const createOrder = async (userId, orderedItems: OrderDto[]) => {
    const t = await sequelize.transaction();

    try {
        const statusPrepare = await Status.findOne({where: {code: 1}})
        const order = await Order.create({userId, statusId: statusPrepare.id})
        const orderId = order.id
        const orderItemsPrepared = orderedItems.map(({itemId, count}) => ({orderId, itemId, itemCount: count}))
        await OrderItem.bulkCreate(orderItemsPrepared)
        await takeItems(orderedItems)

        t.commit()
    } catch (error) {
        t.rollback()
    }
}