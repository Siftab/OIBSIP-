type PizzaOption ={
    id: number;
    name: string;
    quantity: number; // Added quantity to track inventory
}

export type TPizzaData={
   bases: PizzaOption[];
    sauces: PizzaOption[];
    cheeses: PizzaOption[];
    veggies: PizzaOption[];
}
export type PizzaItemType = 'bases' | 'sauces' | 'cheeses' | 'veggies';