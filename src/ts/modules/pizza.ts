import { Data } from "../services/data"

export interface IPizza {
    title:string
    description:string
    toppings:string[]
    price:number
}

export const pizzaData = new Data<IPizza>("http://localhost:3000/pizzas") 