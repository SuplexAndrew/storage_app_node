import {ItemDto} from "../../models/dto/ItemDto";

const db = require('../../models')

export const addItem = async(itemDto: ItemDto) => {
    return await db['Item'].create(itemDto)
}