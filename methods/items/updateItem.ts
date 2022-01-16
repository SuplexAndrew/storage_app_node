import {Item} from "../../models";
import {ItemAttributes} from "../../models/item";

export const updateItem = async(item: ItemAttributes) => {
    return await Item.update({...item},{where: {id:item.id}})
}