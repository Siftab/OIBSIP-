import { PizzaData } from "./inventory.model"



const createInventory= async(payload:TPizzaData)=>{

    const result = await PizzaData.create(payload)



    return result

    

}





export const  inventoryServices = {
    createInventory
}