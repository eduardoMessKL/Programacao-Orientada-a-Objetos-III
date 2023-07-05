import Helicopter from "../vehicles/aerial/Helicopter";
import IAircraft from "../vehicles/aerial/interface/IAircraft";
import Motorcycle from "../vehicles/land/Motorcycle";
import ILandVehicle from "../vehicles/land/interface/ILandVehicle";
import ITransportFactory from "./interface/ITransportFactory";

export default class NineNineTransport implements ITransportFactory{
    createTransportVehicle(): ILandVehicle {
        return new Motorcycle()
    }
    createTransportAircraft(): IAircraft {
        return new Helicopter()
    }
}