import {OrderDto} from "../../models/dto/OrderDto";
import {Item} from "../../models";

export const takeItems = async (takenItems: OrderDto[]) => {
    for (const item of takenItems) {
        const row = await Item.findOne({where: {id: item.itemId}})
        row.countInStorage -= item.count
        await row.save()
    }
}