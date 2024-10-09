import httpStatus from "http-status";
import catchAsync from "../../Utils/catchAsync";
import sendResponse from "../../Utils/sendResponse";
import { PizzaData } from "./inventory.model";
import { pizzaServices } from "../pizza/pizza.services";
import { inventoryServices } from "./inventory.services";




const createInventory = catchAsync(async(req,res)=>{

    const result = await inventoryServices.createInventory(req.body)

    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"Inventory createed succesfully ",
        data:result
    })
})



export const InventoryControllers={
    createInventory
}