import IAircraft from "./interface/IAircraft";

export default class Helicopter implements IAircraft{
    startRoute(): void {
        this.checkWind();
        this.getCargo();
        console.log("Helicoptero: Iniciando decolagem...")
    }
    getCargo(): void {
        console.log("Helicoptero: passageiros embarcados!")
    }
    checkWind(): void {
        console.log("Helicoptero: ventos a 12km/h")
    }
}