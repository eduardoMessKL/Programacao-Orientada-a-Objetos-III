import IDrinks from "../foods/drinks/interface/IDrink";
import IFood from "../foods/snacks/interface/IFood";
import IDeliveryFactory from "./interface/IDeliveryFactory";
import SoftDrink from "../foods/drinks/SoftDrink"
import HotDog from "../foods/snacks/HotDog"

export default class IFoodDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrinks {
        return new SoftDrink()
    }
    createDeliveryFood(): IFood {
        return new HotDog()
    }

}