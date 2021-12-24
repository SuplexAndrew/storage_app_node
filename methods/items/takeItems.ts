import {OrderDto} from "../../models/dto/OrderDto";

const db = require('../../models')

export const takeItems = async (takenItems: OrderDto[]) => {
    for (const item of takenItems) {
        const row = await db['Item'].findOne({where: {id: item.itemId}})
        row.countOnStorage -= item.count
        row.save()
    }
}