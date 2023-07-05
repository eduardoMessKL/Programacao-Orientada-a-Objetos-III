import ILandVehicle from "./interface/ILandVehicle"

export default class Motorcycle implements ILandVehicle{
    startRoute(): void {
        this.getCargo()
        console.log("Moto: Iniciando a entrega...")
    }
    getCargo(): void {
        console.log("Moto: Encomenda Retirada")
    }

}