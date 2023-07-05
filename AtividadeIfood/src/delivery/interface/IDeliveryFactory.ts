import IDrink from "../../foods/drinks/interface/IDrink"
import IFood from "../../foods/snacks/interface/IFood"

export default interface IDeliveryFactory{
    createDeliveryDrink(): IDrink
    createDeliveryFood(): IFood
}