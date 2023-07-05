import IFood from "./interface/IFood";

export default class HotDog implements IFood{
    startDelivery(): void {
        this.getSnack()
        console.log("HotDog: Pedido do HotDog anotado...");
    }
    getSnack(): void {
        console.log("HotDog: HotDog servido!");
    }
}