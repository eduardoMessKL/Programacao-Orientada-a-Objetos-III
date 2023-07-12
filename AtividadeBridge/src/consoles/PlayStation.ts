import IConsole from "./IConsole";

export default class PlayStation implements IConsole{
    constructor(){
        this.configureGame()
        console.log("PLAYSTATION: Plataforma Configurada!")
    }

    configureGame(): void {
        this.authToken()
        console.log("PLAYSTATION: Configurando jogatina...")
    }
    authToken(): void {
        console.log("PLAYSTATION: Autenticando Token")
    }

}