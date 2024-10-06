import {Router} from 'express'
import { userRoute } from '../modules/Users/user.route'
const router = Router()



const moduleRoutes =[{
    path:'/user',
    route:userRoute
}]

moduleRoutes.forEach((route) => router.use(route.path,route.route));



export default router