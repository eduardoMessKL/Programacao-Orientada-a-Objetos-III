import IPlay from "./IPlay";
import IConsole from "../consoles/IConsole"

export default class Play implements IPlay{
    constructor(private console : IConsole){};

    playing(): void {
        console.log("Iniciando os jogos.");
    }
    result(): void {
        console.log("********* Jogo Ligado *********");    
    }
}