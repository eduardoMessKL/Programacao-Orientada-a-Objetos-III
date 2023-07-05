import Company from "../../AtividadeIfood/src/delivery/consts/Company";
import IDeliveryFactory from "../../AtividadeIfood/src/delivery/interface/IDeliveryFactory"
import IFoodDelivery from "../src/delivery/IFoodDelivery"
import AiqFomeDelivery from "../src/delivery/IFoodDelivery"
import Client from "../src/client/Client";

const currentCompany = Company.AIQFOME
let factory! : IDeliveryFactory

switch(currentCompany){
    case Company.IFOOD :
        factory = new IFoodDelivery()
        break
    case Company.AIQFOME :
        factory = new AiqFomeDelivery()
        break
    default :
    console.log("Companhia não definida!")
    break
}

const client = new Client(factory)
client.startDelivery()


