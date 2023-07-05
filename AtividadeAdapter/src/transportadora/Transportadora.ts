import Token from "../utils/Token"
import ITransportadora from "./ITransportadora"

export default class Transportadora implements ITransportadora{
    send(): void {
        console.log("Eviando Transportadora")
    }
    receive(): void {
        console.log("Recebendo Transportadora")
    }
}