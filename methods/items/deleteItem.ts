import {Item} from "../../models";

export const deleteItem = async(itemId: number) => {
    const item = await Item.findOne({where: {id: itemId}})
    await item.destroy()
}