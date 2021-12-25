import {ItemDto} from "../../models/dto/ItemDto";
import {Item} from "../../models";

export const addItem = async(itemDto: ItemDto) => {
    return await Item.create(itemDto)
}