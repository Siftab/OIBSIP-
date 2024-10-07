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


const forgetPassword =catchAsync(async(req,res)=>{

    const {userId} = req.params

    const result = await AuthServices.forgetPassword(userId)

    sendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"password link generated successfully ",
        data:' '
    })
    
})
const emailVerification =catchAsync(async(req,res)=>{

    const {userId} = req.params

    const result = await AuthServices.emailVerification(userId)

    sendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"email link generated successfully ",
        data:' '
    })
    
})


const confirmEmail = catchAsync(async(req,res)=>{


    const result = await AuthServices.confirmEmail(req.query.id as string)


    sendResponse(res,{
        success:true,
        statusCode:httpStatus.OK,
        message:"email is verfied ",
        data:result
    })
})





export const AuthController ={
    loginUser,forgetPassword,emailVerification,confirmEmail}