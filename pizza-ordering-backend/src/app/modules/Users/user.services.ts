



// create User 

import { User } from "./user.model"

const createUserIntoDb = async(payload:TUser)=>{


     const result =await User.create(payload)

     return result

}






export const UserServices ={
createUserIntoDb
}