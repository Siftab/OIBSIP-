type PizzaOption ={
    id: number;
    name: string;
    quantity: number; // Added quantity to track inventory
}

type TPizzaData={
   bases: PizzaOption[];
    sauces: PizzaOption[];
    cheeses: PizzaOption[];
    veggies: PizzaOption[];
}
