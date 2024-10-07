import { assert } from "console";
import { TPizzaOrder } from "./order.interface";
import { PizzaOrder } from "./order.model";





const createOrder = async(payload:TPizzaOrder)=>{

    const result = await PizzaOrder.create(payload)
    return result
}

const getAllOrder = async()=>{

    const result = await PizzaOrder.find()
    return result
}
const updateOrder = async(id:string,payload:Partial<TPizzaOrder>)=>{

    const result = await PizzaOrder.findByIdAndUpdate(id,payload,{new:true})
    return result
}



export const OrderService= {
    createOrder,getAllOrder,updateOrder
}