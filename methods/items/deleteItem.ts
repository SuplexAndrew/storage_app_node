import {ItemDto} from "../../models/dto/ItemDto";

const db = require('../../models')

export const deleteItem = async(itemDto: ItemDto) => {
    const item = await db['Item'].findOne({where: {id:itemId}})
    await item.destroy()
}