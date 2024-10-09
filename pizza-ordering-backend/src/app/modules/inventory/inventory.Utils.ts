import { PizzaData } from "./inventory.model";

export const reduceInventory = async (selectedBaseId:number, selectedSauceId :number, selectedCheeseId :number, selectedVeggiesIds :[number]) => {
    try {
        // Step 1: Reduce the base quantity
        await PizzaData.updateOne(
            { 'bases.id': selectedBaseId },  
            { $inc: { 'bases.$.quantity': -1 } }  
        );

        // Step 2: Reduce the sauce quantity
        await PizzaData.updateOne(
            { 'sauces.id': selectedSauceId }, 
            { $inc: { 'sauces.$.quantity': -1 } }  
        );

        // Step 3: Reduce the cheese quantity
        await PizzaData.updateOne(
            { 'cheeses.id': selectedCheeseId },  
            { $inc: { 'cheeses.$.quantity': -1 } }  
        );

        // Step 4: Reduce the quantity for each selected veggie
        for (let veggieId of selectedVeggiesIds) {
            await PizzaData.updateOne(
                { 'veggies.id': veggieId },  
                { $inc: { 'veggies.$.quantity': -1 } }
            );
        }

        console.log("Inventory successfully updated!");
    } catch (error) {
        console.error("Error reducing inventory:", error);
    }
};

// Example usage
export const checkInventory = async (selectedBaseId:number, selectedSauceId :number, selectedCheeseId :number, selectedVeggiesIds:[number]) => {
    try {
        // Check the base quantity
        const base = await PizzaData.findOne({ 'bases.id': selectedBaseId }, { 'bases.$': 1 });
        if (!base || !base.bases || base.bases.length === 0) {
            throw new Error(`Base with ID '${selectedBaseId}' not found or is out of stock!`);
        }


        if (base.bases[0].quantity <= 0) {
            throw new Error(`Base '${base.bases[0].name}' is out of stock!`);
        }


     
        // Check the sauce quantity
        const sauce = await PizzaData.findOne({ 'sauces.id': selectedSauceId }, { 'sauces.$': 1 });
        if (!sauce || !sauce.sauces || sauce.sauces.length === 0) {
            throw new Error(`Base with ID '${selectedBaseId}' not found or is out of stock!`);
        }
        if (sauce.sauces[0].quantity <= 0) {
            throw new Error(`Sauce '${sauce.sauces[0].name}' is out of stock!`);
        }

        // Check the cheese quantity
        const cheese = await PizzaData.findOne({ 'cheeses.id': selectedCheeseId }, { 'cheeses.$': 1 });
        if (!cheese || !cheese.cheeses || cheese.cheeses.length === 0) {
            throw new Error(`Base with ID '${selectedBaseId}' not found or is out of stock!`);
        }
        if (cheese.cheeses[0].quantity <= 0) {
            throw new Error(`Cheese '${cheese.cheeses[0].name}' is out of stock!`);
        }

        // Check each veggie quantity
        for (let veggieId of selectedVeggiesIds) {
            const veggie = await PizzaData.findOne({ 'veggies.id': veggieId }, { 'veggies.$': 1 });
            if (!veggie || !veggie.veggies || veggie.veggies.length === 0) {
                throw new Error(`Base with ID '${selectedBaseId}' not found or is out of stock!`);
            }
            if (veggie.veggies[0].quantity <= 0) {
                throw new Error(`Veggie '${veggie.veggies[0].name}' is out of stock!`);
            }
        }

        console.log("All ingredients are available.");
    } catch (error) {
        console.error("Inventory check error:", error.message);
    }
};
