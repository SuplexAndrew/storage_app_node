import {getItems, takeItems, addItem, updateItem, deleteItem} from "../methods/items";

module.exports = {
    getItems: async (req, res) =>
        res.json(await getItems()),
    takeItems: async (req, res) =>
        res.json(await takeItems(req.body)),
    addItem: async (req, res) =>
        res.json(await addItem(req.body)),
    updateItem: async (req, res) =>
        res.json(await updateItem(req.params.id, req.body)),
    deleteItem: async (req, res) =>
        res.json(await deleteItem(req.params.id)),
}