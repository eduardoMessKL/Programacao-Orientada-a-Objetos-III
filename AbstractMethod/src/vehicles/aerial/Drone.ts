import Airplane from "./Airplane";

export default class Drone implements Airplane{
    startRoute(): void {
        this.checkWind()
        this.getCargo()
        console.log("Drone: Iniciando a decolagem...")
    }
    getCargo(): void {
        console.log("Drone: Encomenda embarcada!")    
    }
    checkWind(): void {
        console.log("Drone: Ventos a 23km/h, PERIGO!")
    }
}