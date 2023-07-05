import IVehicle from "./interface/IVehicle";

export default class Bicycle implements IVehicle{
    startRoute(): void {
        this.getCargo()
        console.log("Bicicleta: Iniciando a empinada...")
    }
    getCargo(): void {
        console.log("Bicicleta: Empinando!")
    }

}