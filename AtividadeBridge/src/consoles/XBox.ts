import IConsole from "./IConsole";

export default class XBox implements IConsole{
    constructor(){
        this.configureGame()
        console.log("XBOX: Plataforma Configurada!")
    }

    configureGame(): void {
        this.authToken()
        console.log("XBOX: Configurando jogatina...")
    }
    authToken(): void {
        console.log("XBOX: Autenticando Token")
    }

}