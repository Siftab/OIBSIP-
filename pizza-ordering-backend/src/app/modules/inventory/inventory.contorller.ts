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

 const addInventory  = catchAsync(async(req,res)=>{

    const {itemType, itemId, quantityToAdd}=req.body

    const result = await inventoryServices.addInventory(itemType, itemId, quantityToAdd)


    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"Inventory Updated succesfully ",
        data:result
    })
 })



export const InventoryControllers={
    createInventory,addInventory
}