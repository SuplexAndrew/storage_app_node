import express from 'express'
const cors = require('cors')
import {userRouter} from "./routers";
const app = express()

const port = 5000;
app.use(cors({
    origin: '*'
}));
app.use(express.json())
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
    next();
});
app.use('/user', userRouter)
app.get('/', (request, response) => {
    response.send('Hello world!');
});
app.listen(port, () => console.log(`Running on port ${port}`));