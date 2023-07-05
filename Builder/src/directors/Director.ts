import IBuilder from "../builders/IBuilder";
import Engine from "../components/Engine";
import Transmission from "../components/Transmission";
import VehicleType from "../components/VehicleType";
import Wheel from "../components/Wheel";

export default class Director{
    constructor(private builder: IBuilder){}

    constructSedanCar(){
        this.builder.setVehicleType(VehicleType.SEDAN)
        this.builder.setSeats(5)
        this.builder.setTransmission(Transmission.AUTOMATIC)
        this.builder.setEngine(new Engine(1.8))
        this.builder.addWheels(new Wheel(17))
        this.builder.addWheels(new Wheel(17))
        this.builder.addWheels(new Wheel(17))
        this.builder.addWheels(new Wheel(17))
    }
    constructTruck(){
        this.builder.setVehicleType(VehicleType.TRUCK)
        this.builder.setSeats(2)
        this.builder.setTransmission(Transmission.MANUAL)
        this.builder.setEngine(new Engine(4.6))
        this.builder.addWheels(new Wheel(22))
        this.builder.addWheels(new Wheel(22))
        this.builder.addWheels(new Wheel(22))
        this.builder.addWheels(new Wheel(22))
        this.builder.addWheels(new Wheel(22))
        this.builder.addWheels(new Wheel(22))
        this.builder.addWheels(new Wheel(22))
        this.builder.addWheels(new Wheel(22))
        this.builder.addWheels(new Wheel(22))
        this.builder.addWheels(new Wheel(22))
        this.builder.addWheels(new Wheel(22))
        this.builder.addWheels(new Wheel(22))
    }

    
}