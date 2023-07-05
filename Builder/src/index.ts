import VehicleBuilder from "./builders/VehicleBuilder";
import VehicleType from "./components/VehicleType";
import Director from "./directors/Director";
import Vehicle from "./products/Vehicle";

const builder : VehicleBuilder = new VehicleBuilder()
const director : Director = new Director(builder)

director.constructSedanCar()
const sedan : Vehicle = builder.getVehicle()
imprimirDetalhes(sedan)
director.constructTruck()
const truck : Vehicle = builder.getVehicle()
imprimirDetalhes(truck)

function imprimirDetalhes(vehicle : Vehicle){
    console.log("----------------------------------------------------------")
    console.log("Construindo Veiculo: " + vehicle.vehicleType)
    console.log("Motorização: " + vehicle.engine.power)
    console.log("Câmbio: " + vehicle.transmission)
    console.log("Lugares: " + vehicle.seats)
    console.log("Rodas: " + vehicle.wheels.length)
    console.log("Aro: " + vehicle.wheels[0].rim)
    console.log("----------------------------------------------------------")
}

