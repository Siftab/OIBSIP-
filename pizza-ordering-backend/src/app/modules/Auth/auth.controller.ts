import httpStatus from "http-status";
import catchAsync from "../../Utils/catchAsync";
import sendResponse from "../../Utils/sendResponse";
import { AuthServices } from "./auth.services";






const loginUser = catchAsync(async (req,res)=> 
    {
    const {userEmail,userPassword}=req.body
   
    
    const result = await AuthServices.loginUser(req.body)


    sendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"login succesfully",
        data:result
    })
})






export const AuthController ={
    loginUser
}