import {Item} from "../../models";
import {ItemDto} from "../../models/dto/ItemDto";

export const updateItem = async(itemId: number, itemDto: ItemDto) => {
    return await Item.update({...itemDto},{where: {id:itemId}})
}