import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";
import Vehicle from "../products/Vehicle";
import IBuilder from "./IBuilder";

export default class VehicleBuilder implements IBuilder{

    private _vehicle = new Vehicle()

    reset(): void {
        this._vehicle = new Vehicle
    }
    getVehicle(): Vehicle {
        const result : Vehicle = this._vehicle
        this.reset()
        return result

    }
    addWheels(wheel: Wheel) {
        this._vehicle.addWheel(wheel)
    }
    setVehicleType(value: VehicleType) {
        this._vehicle.vehicleType = value
    }
    setSeats(seats: number) {
        this._vehicle.seats = seats
    }
    setEngine(engine: Engine) {
        this._vehicle.engine = engine
    }
    setTransmission(value: Transmission) {
        this._vehicle.transmission = value
    }

}