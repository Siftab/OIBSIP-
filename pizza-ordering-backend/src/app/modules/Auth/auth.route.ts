import { Router } from "express";
import { AuthController } from "./auth.controller";




const router = Router()

router.post('/login',AuthController.loginUser)
router.post('/forget-password/:userId',AuthController.forgetPassword)
router.post('/email-varification/:userId',AuthController.emailVerification)
router.post('/confirm-email',AuthController.confirmEmail)






export const authRouter = router