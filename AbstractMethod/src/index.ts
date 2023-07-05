import Company from "./transport/consts/Company";
import ITransportFactory from "./transport/interface/ITransportFactory";
import UberTransport from "./transport/UberTransport"
import NineNineTransport from "./transport/NineNineTransport";
import Client from "./client/Client";
import LimeTransport from "./transport/LimeTransport";

const currentCompany = Company.LIME
let factory! : ITransportFactory

switch(currentCompany){
    case Company.UBER :
        factory = new UberTransport()
        break
    case Company.NINENINE :
        factory = new NineNineTransport()
        break
    case Company.LIME :
        factory = new LimeTransport()
    default :
        console.log("Companhia não definida!")
}

const client = new Client(factory)
client.startRoute()