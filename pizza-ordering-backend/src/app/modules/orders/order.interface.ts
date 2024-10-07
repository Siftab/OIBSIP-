


export type TPizzaOrder = {
    orderBy:string
    pizza:string,
    quantity:number,
    isPaid: boolean,
    
    orderStatus: "order received"|"in the kitchen"|"to the delivery"
}