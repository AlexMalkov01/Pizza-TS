import { IPizza, pizzaData } from "./modules/pizza"

const PARENT_ELEMENT = document.querySelector(".root")!

 function creataPizzaTimplate (pizza:IPizza):string {
    return `
    <div class="pizza">
    <h2>${pizza.title}</h2>
    <p>${pizza.description}</p>
    <p class="topings">
    ${pizza.toppings?.join(", ")}
    </p>
    <span class="price">
    ${pizza.price} RUB.
    </span>
    </div>
    `
}

function renderTemplate (templats:string[],parante:Element):void {
    const templatElement = document.createElement("template")

    for (let template of templats) {
        templatElement.innerHTML += template
    }

    parante.append(templatElement.content)
}

document.addEventListener("DOMContentLoaded", async ()=>{
    const pizza = await pizzaData.loadAll()

    const templats = pizza.map(creataPizzaTimplate)
    
    renderTemplate(templats,PARENT_ELEMENT)

})