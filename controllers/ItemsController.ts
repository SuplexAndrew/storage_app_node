import {getAll} from "../methods/items";

module.exports = {
    getAll: async(req, res) =>
        res.json(await getAll())
}