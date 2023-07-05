import ITransportFactory from "../transport/interface/ITransportFactory"
import ILandVehicle from "../vehicles/land/interface/ILandVehicle"
import IAircraft from "../vehicles/aerial/interface/IAircraft"


export default class Client{
    private vehicle: ILandVehicle
    private aircraft: IAircraft

    constructor(factory: ITransportFactory){
        this.vehicle = factory.createTransportVehicle()
        this.aircraft = factory.createTransportAircraft()
    }

    startRoute(): void{
        this.vehicle.startRoute()
        this.aircraft.startRoute()
    }
}