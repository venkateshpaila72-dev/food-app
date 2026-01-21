import express from 'express'
import { placeOrder } from '../controllers/orderContoller.js'
import authMiddleware from '../middleware/auth.js';

const orderRouter = express.Router();

orderRouter.post('/place',authMiddleware,placeOrder);

export default orderRouter;