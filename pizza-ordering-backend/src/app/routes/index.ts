import {Router} from 'express'
import { userRoute } from '../modules/Users/user.route'
import { authRouter } from '../modules/Auth/auth.route';
import { pizzaRoute } from '../modules/pizza/pizza.route';
const router = Router()



const moduleRoutes =[{
    path:'/user',
    route:userRoute
}
,{
    path:'/auth',
    route: authRouter
    
    
}
,{
    path:'/',
    route: pizzaRoute
    
    
}
]

moduleRoutes.forEach((route) => router.use(route.path,route.route));



export default router