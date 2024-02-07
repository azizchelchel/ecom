
import userRouter from './routes/user.routes.js'
import orderRouter from './routes/order.routes.js'
import express from 'express'
const server = express()
import dotenv from 'dotenv'
dotenv.config();
const PORT = process.env.SERVER_PORT || 3002;

//config
server.use(express.json())
//middlewares
server.use("user/", userRouter)
server.use("order/", orderRouter)



server.listen(PORT, (error) => { 
    if (error) {
        console.log('server not running !');
    }
    else
    {
        console.log(`server runnning on PORT ${PORT}`);
    }
 })