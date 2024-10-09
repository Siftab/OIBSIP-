import { Router } from "express";
import { InventoryControllers } from "./inventory.contorller";



const router = Router()




router.post('/create-inventory',InventoryControllers.createInventory)




export const inventoryRoute= router