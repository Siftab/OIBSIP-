import { model, Schema } from "mongoose";


const userSchema = new Schema<TUser>({
    userName:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type: String, enum: ['user', 'admin'], default: 'user' 
    }


})


export const User = model<TUser>('User',userSchema)