import express from 'express'
import { UserControllers } from './user.controller'



const router = express.Router()


// creating user
router.post('/create-user',UserControllers.createUser)
router.get('/',UserControllers.getAllUser)
router.patch('/update-user/:id',UserControllers.updateUser)
router.patch('/delete-user/:id',UserControllers.deleteSingleUser)






export const userRoute = router