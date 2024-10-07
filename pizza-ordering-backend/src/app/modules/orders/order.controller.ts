import httpStatus from "http-status";
import catchAsync from "../../Utils/catchAsync";
import sendResponse from "../../Utils/sendResponse";
import { OrderService } from "./order.services";






const createOrder = catchAsync(async(req,res)=>{

     const result = await OrderService.createOrder(req.body)
     sendResponse(res,{success:true,statusCode:httpStatus.OK,message:"order Created ",data:result})
})


const getAllOrder = catchAsync(async(req,res)=>{

     const result = await OrderService.getAllOrder()
     sendResponse(res,{success:true,statusCode:httpStatus.OK,message:"got all order list ",data:result})
})

const updateOrder = catchAsync(async(req,res)=>{

     const result = await OrderService.updateOrder(req.params.id,req.body)
     sendResponse(res,{success:true,statusCode:httpStatus.OK,message:"got all order list ",data:result})
})








export const OrderControllers ={
    createOrder,getAllOrder,updateOrder
}