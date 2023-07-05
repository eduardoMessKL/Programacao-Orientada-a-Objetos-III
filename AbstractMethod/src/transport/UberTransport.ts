import Airplane from "../vehicles/aerial/Airplane";
import IAircraft from "../vehicles/aerial/interface/IAircraft";
import Car from "../vehicles/land/Car";
import ILandVehicle from "../vehicles/land/interface/ILandVehicle";
import ITransportFactory from "./interface/ITransportFactory";

export default class UberTransport implements ITransportFactory{
    createTransportVehicle(): ILandVehicle {
        return new Car()
    }
    createTransportAircraft(): IAircraft {
        return new Airplane()
    }
}