import IDrink from "../foods/drinks/interface/IDrink"
import IFood from "../foods/snacks/interface/IFood"
import IDeliveryFactory from "../delivery/interface/IDeliveryFactory"

export default class Client{
    private drink: IDrink
    private food: IFood

    constructor(factory: IDeliveryFactory){
        this.drink = factory.createDeliveryDrink()
        this.food = factory.createDeliveryFood()
    }

    startDelivery(): void{
        this.drink.startDelivery()
        this.food.startDelivery()
    }
}