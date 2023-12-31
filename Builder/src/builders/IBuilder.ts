import Engine from "../components/Engine"
import Transmission from "../components/Transmission"
import VehicleType from "../components/VehicleType"
import Wheel from "../components/Wheel"
import Vehicle from "../products/Vehicle"

export default interface IBuilder{
    reset(): void
    getVehicle(): Vehicle
    addWheels(wheel: Wheel)
    setVehicleType(value: VehicleType)
    setSeats(seats: number)
    setEngine(engine: Engine)
    setTransmission(value: Transmission)
}