import { Router } from "express";
import { AuthController } from "./auth.controller";




const router = Router()

router.post('/login',AuthController.loginUser)
router.post('/forget-password',AuthController.loginUser)






export const authRouter = router