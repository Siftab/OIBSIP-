import httpStatus from "http-status";
import catchAsync from "../../Utils/catchAsync";
import sendResponse from "../../Utils/sendResponse";
import { AuthServices } from "./auth.services";
import config from "../../config";






const loginUser = catchAsync(async (req,res)=> 
    {
    const {userEmail,userPassword}=req.body
   
    
    const result = await AuthServices.loginUser(req.body)


    res.cookie('refreshToken',result.refreshtoken,{
        secure: config.NODE_ENV === 'production',
        httpOnly: true,
        sameSite: 'none',
        maxAge: 1000 * 60 * 60 * 24 * 365,
    })


    sendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"login succesfully",
        data:{token:result.token,user:result.user}
    })
})






export const AuthController ={
    loginUser
}