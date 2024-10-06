import express from 'express'
import { UserControllers } from './user.controller'



const router = express.Router()


// creating user
router.post('/create-user',UserControllers.createUser)






export const userRoute = router