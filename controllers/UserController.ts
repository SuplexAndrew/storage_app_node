import {login, registration} from "../methods/user";

module.exports = {
    login: async (req, res) => {
        const user = await login(req.body)

        user ? res.json(user) : res.status(400).json({message: 'Некорректные данные'})
    },
    registration: async (req, res) => {
        const user = await registration(req.body)

        user ? res.json(user) : res.status(400).json({message: 'Некорректные данные'})
    }
}