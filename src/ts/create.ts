import { IPizza, pizzaData } from "./modules/pizza"

const form = document.querySelector("form")

form?.addEventListener("submit", (e)=> {
    e.preventDefault()

    const data = new FormData(form)

    const newPizza:IPizza = {
        title: data.get("title") as string ,
        description: data.get("discription") as string,
        toppings: data.getAll("topings") as string[],
        price: Number(data.get("price")) as number
    } 

    const res = pizzaData.save(newPizza)
    window.location.href = "/"
})