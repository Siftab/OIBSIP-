import httpStatus from "http-status";
import catchAsync from "../../Utils/catchAsync";
import sendResponse from "../../Utils/sendResponse";
import { pizzaServices } from "./pizza.services";






const getAllPizza = catchAsync(async(req,res)=>{
    const result = await pizzaServices.getAllPizza()






    sendResponse(res,{
        success:true,statusCode:httpStatus.OK,message:"got all pizza",data:result
    })
})
const createAPizza = catchAsync(async(req,res)=>{
    const result = await pizzaServices.createAPizza(req.body)






    sendResponse(res,{
        success:true,statusCode:httpStatus.OK,message:"pizza creaeted successfully",data:result
    })
})


export const pizzaControllers = {
    getAllPizza,createAPizza
}