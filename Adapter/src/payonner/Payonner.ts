import Token from "../utils/Token"
import IPaypalPayment from "./IPayonner"

export default class Payonner implements IPaypalPayment{
    private token: Token

    authToken(): Token {
        return new Token()
    }
    sendPayment(): void {
        this.token = this.authToken()
        console.log("Token:" + this.token.token)
        console.log("Eviando pagamento via PAYONNER")
    }
    receivePayment(): void {
        this.token = this.authToken()
        console.log("Token:" + this.token.token)
        console.log("Recebendo pagamento via PAYONNER")
    }
}