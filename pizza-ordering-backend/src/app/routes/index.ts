import {Router} from 'express'
import { userRoute } from '../modules/Users/user.route'
import { authRouter } from '../modules/Auth/auth.route';
const router = Router()



const moduleRoutes =[{
    path:'/user',
    route:userRoute
},{
    path:'/auth',
    route: authRouter
    
    
}]

moduleRoutes.forEach((route) => router.use(route.path,route.route));



export default router