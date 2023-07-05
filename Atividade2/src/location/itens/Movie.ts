import IItem from "./interface/IItem";

export default class Movie implements IItem{
    start(): void {
        this.getDescription()
        console.log("Movie: filme inicializado!!!!")
    }
    getDescription(): void {
        console.log("Movie: Iniciando o filme...")
    }
}
