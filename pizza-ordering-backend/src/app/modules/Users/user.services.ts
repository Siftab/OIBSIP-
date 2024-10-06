



// create User 

import { User } from "./user.model"

const createUserIntoDb = async(payload:TUser)=>{


     const result =await User.create(payload)

     return result

}
const getAllUser = async()=>{


     const result =await User.find()

     return result

}
const updateSingleUser = async(id:string,payload:Partial<TUser>)=>{




     const result =await User.findByIdAndUpdate(id,payload)

     return result

}
const deleteSingleUser = async(id:string)=>{




     const result =await User.findByIdAndDelete(id)

     return result

}






export const UserServices ={
createUserIntoDb,
getAllUser,updateSingleUser,deleteSingleUser
}