import {OrderDto} from "../../models/dto/OrderDto";
import {Item} from "../../models";

export const takeItems = async (takenItems: OrderDto[]) => {
    for (const {itemId, count} of takenItems) {
        await Item.increment({countInStorage: -count}, {where: {id:itemId}})
    }
}