import httpStatus from "http-status";
import catchAsync from "../../Utils/catchAsync";
import sendResponse from "../../Utils/sendResponse";
import { UserServices } from "./user.services";





const createUser = catchAsync(async(req,res)=>{
    console.log(req.body)
    
    const result = await UserServices.createUserIntoDb(req.body)


    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message: " user created successfully ",
        data:result
    })
})





export const UserControllers = {
    createUser
}