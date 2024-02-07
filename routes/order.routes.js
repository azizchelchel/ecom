import express from 'express';
import { createOrder, removeOrder } from "../controllers/order.controller.js";
const router = express.Router();
// place an order
router.post("/order/:prodId", createOrder );
//delete an order
router.post("/order/:ordreID", removeOrder);
export default router;