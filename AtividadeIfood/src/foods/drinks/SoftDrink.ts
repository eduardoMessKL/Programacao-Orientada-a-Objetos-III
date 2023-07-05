import IDrinks from "./interface/IDrink";

export default class SoftDrink implements IDrinks{
    startDelivery(): void {
        this.getDrink()
        console.log("SoftDrink: Iniciando o pedido de drink!");
    }
    getDrink(): void {
        console.log("SoftDrink: Drink finalizado!");
    }
}