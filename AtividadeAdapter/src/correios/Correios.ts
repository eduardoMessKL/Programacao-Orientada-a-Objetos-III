import Token from "../utils/Token"
import ICorreios from "./ICorreios"

export default class Correios implements ICorreios{
    sendCorreios(): void {
        console.log("Eviando Correios")
    }
    receiveCorreios(): void {
        console.log("Recebendo Correios")
    }
}