import {Item} from '../../models'

export const getItems = async() => {
    return await Item.findAll()
}