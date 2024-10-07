import { model, Schema } from "mongoose";
import { Tpizza } from "./pizza.interface";




const pizzaSchema = new Schema<Tpizza>({
     title:{
        type:String,
        required:true
     },
     description:{
        type:String,
        required:true
     },
     price:{
        type:Number,
        required:true,
        default:0
}})



export const Pizza = model<Tpizza>("Pizza",pizzaSchema)