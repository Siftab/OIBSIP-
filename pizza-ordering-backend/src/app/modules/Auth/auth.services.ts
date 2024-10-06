import httpStatus from "http-status"
import AppError from "../../errors/AppError"
import sendResponse from "../../Utils/sendResponse"
import { User } from "../Users/user.model"







// succesfully login user 
const loginUser  = async(payload:TauthUser)=>{
    const {userEmail,userPassword}=payload
    console.log(payload)
    if(!userEmail || !userPassword){
        throw new AppError(httpStatus.BAD_REQUEST,"need password and email")
    }
    
     const user = await User.findOne( {userEmail})
     console.log(user?.password,    userPassword)

     if(!user){
        throw new AppError(httpStatus.NOT_FOUND,"user not found")
     }

     if(user?.password !== userPassword )
     {
        throw new AppError(httpStatus.CONFLICT,"password not matched")
     }


     return user

}





export const AuthServices ={
    loginUser
}