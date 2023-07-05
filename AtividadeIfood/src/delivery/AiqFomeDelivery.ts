import IDrinks from "../foods/drinks/interface/IDrink"
import IFood from "../foods/snacks/interface/IFood"
import IDeliveryFactory from "./interface/IDeliveryFactory"
import Beer from "../foods/drinks/Beer"
import Hamburguer from "../foods/snacks/Hamburguer"

export default class AiqFomeDelivery implements IDeliveryFactory{
    createDeliveryDrink(): IDrinks {
        return new Beer()
    }
    createDeliveryFood(): IFood {
        return new Hamburguer()
    }

}