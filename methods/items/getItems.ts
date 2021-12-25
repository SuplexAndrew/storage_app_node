import {Item} from '../../models'

export const getItems = async() => {
    const res = await Item.findAll()
    console.log(res)
    return res
}