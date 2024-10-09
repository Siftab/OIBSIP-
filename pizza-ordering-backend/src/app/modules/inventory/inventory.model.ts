import { Schema } from "mongoose";
import { model } from "mongoose";


const pizzaOptionSchema = new Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    quantity: { type: Number, required: true }
});

const pizzaDataSchema = new Schema({
    bases: [pizzaOptionSchema],
    sauces: [pizzaOptionSchema],
    cheeses: [pizzaOptionSchema],
    veggies: [pizzaOptionSchema]
});

// Create model from schema
export const PizzaData =model('PizzaData', pizzaDataSchema);
