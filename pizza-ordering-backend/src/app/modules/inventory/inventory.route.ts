import { Router } from "express";
import { InventoryControllers } from "./inventory.contorller";



const router = Router()




router.post('/create-inventory',InventoryControllers.createInventory)
router.post('/update-inventory',InventoryControllers.addInventory)




export const inventoryRoute= router