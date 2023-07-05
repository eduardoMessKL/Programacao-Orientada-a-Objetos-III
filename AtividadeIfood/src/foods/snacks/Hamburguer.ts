import IFood from "./interface/IFood";

export default class Hamburguer implements IFood{
    startDelivery(): void {
        this.getSnack()
        console.log("Hamburguer: Pedido do Hamburguer anotado...");
    }
    getSnack(): void {
        console.log("Hamburguer: Hamburguer servido!");
    }
}