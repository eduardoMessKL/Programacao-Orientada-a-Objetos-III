import Drone from "../vehicles/aerial/Drone";
import IAircraft from "../vehicles/aerial/interface/IAircraft";
import Scooter from "../vehicles/land/Scooter";
import ILandVehicle from "../vehicles/land/interface/ILandVehicle";
import ITransportFactory from "./interface/ITransportFactory";

export default class LimeTransport implements ITransportFactory{
    createTransportVehicle(): ILandVehicle {
        return new Scooter()
    }
    createTransportAircraft(): IAircraft {
        return new Drone()
    }

}