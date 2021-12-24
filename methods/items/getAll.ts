import {Item} from '../../models'

export const getAll = async() => {
    const res = await Item.findAll()
    console.log(res)
    return res
}