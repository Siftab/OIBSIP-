import {Router} from 'express'
import { userRoute } from '../modules/Users/user.route'
import { authRouter } from '../modules/Auth/auth.route';
import { pizzaRoute } from '../modules/pizza/pizza.route';
import { OrderRouter } from '../modules/orders/order.route';
import { inventoryRoute } from '../modules/inventory/inventory.route';
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
,{
    path:'/order',
    route: OrderRouter
    
    
}
,{
    path:'/inventory',
    route: inventoryRoute
    
    
}
]

moduleRoutes.forEach((route) => router.use(route.path,route.route));



export default router