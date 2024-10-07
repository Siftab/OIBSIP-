import { Router } from "express";
import { pizzaControllers } from "./pizza.controller";



const router = Router()




router.get('/',pizzaControllers.getAllPizza)
router.post('/create-pizza',pizzaControllers.createAPizza)






export const pizzaRoute= router