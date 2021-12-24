const db = require('../../models')

export const updateItem = async(itemId: number) => {
    const item = await db['Item'].findOne({where: {id:itemId}})
    await item.destroy()
}