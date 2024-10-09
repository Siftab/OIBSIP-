import { PizzaItemType, TPizzaData } from "./inventory.interface"
import { PizzaData } from "./inventory.model"



const createInventory= async(payload:TPizzaData)=>{

    const result = await PizzaData.create(payload)



    return result

    

}
const addInventory= async(itemType:PizzaItemType, itemId:number, quantityToAdd:number)=>{
    const updatePath = `${itemType}.id`;
    const updateItem = `${itemType}.$.quantity`;

    // Find and update the quantity of the item
    const result = await PizzaData.findOneAndUpdate(
      { [updatePath]: itemId },
      { $inc: { [updateItem]: quantityToAdd } },
      { new: true, projection: { [itemType]: 1 } } // Return the updated item type only
    );

    if (result) {
      console.log(`Inventory updated successfully. New ${itemType} quantities:`, result[itemType]);
      
    } else {
      console.log(`Item with ID ${itemId} not found in ${itemType}.`);
    }


    return result
}





export const  inventoryServices = {
    createInventory,addInventory
}