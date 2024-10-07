import { Tpizza } from "./pizza.interface"
import { Pizza } from "./pizza.model"





const getAllPizza = async()=>{


    const result = await Pizza.find()
    return result

}

const createAPizza = async(payload:Tpizza)=>{


    const result = await Pizza.create(payload)
    return result

}





export const pizzaServices = {
    getAllPizza,createAPizza
}