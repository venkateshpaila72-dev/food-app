import express from 'express'
import { placeOrder, usersOrder, verifyOrder } from '../controllers/orderContoller.js'
import authMiddleware from '../middleware/auth.js';

const orderRouter = express.Router();

orderRouter.post('/place',authMiddleware,placeOrder);
orderRouter.post('/verify',verifyOrder)
orderRouter.post('/userorders',authMiddleware,usersOrder)

export default orderRouter;