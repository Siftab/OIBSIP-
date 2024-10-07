import { Router } from "express";
import { OrderControllers } from "./order.controller";




const router = Router()


router.post('/make-order',OrderControllers.createOrder)
router.get('/',OrderControllers.getAllOrder)
router.patch('/update-order/:id',OrderControllers)



export const OrderRouter =router