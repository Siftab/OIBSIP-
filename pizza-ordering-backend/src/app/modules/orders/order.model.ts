import { model, Schema } from "mongoose";
import { TPizzaOrder } from "./order.interface";

const pizzaOrderSchema: Schema = new Schema<TPizzaOrder>({
    orderBy: {
      type: String,
      required: true
    },
    pizza: {
      type: String,
      required: true
    },
    isPaid: {
      type: Boolean,
      required: true,
      default:false
    },
    quantity: {
      type: Number,
      required: true,
      min: 1
    },
    orderStatus: {
      type: String,
      enum: ["order received", "in the kitchen", "to the delivery"],
      default: "order received",
      required: true
    }
  });
  
  export const PizzaOrder = model<TPizzaOrder>('PizzaOrder', pizzaOrderSchema);
  