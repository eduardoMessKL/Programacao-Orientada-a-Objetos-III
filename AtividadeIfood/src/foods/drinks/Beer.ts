import IDrinks from "./interface/IDrink";

export default class Beer implements IDrinks{
    startDelivery(): void {
        this.startDelivery()
        console.log("Beer: Iniciando o pedido da cerveja!");
    }
    getDrink(): void {
        console.log("Beer: Cerveja servida!");
    }
}