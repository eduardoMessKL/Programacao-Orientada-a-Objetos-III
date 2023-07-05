import Token from "../utils/Token";
import IPaypalPayment from "./IPaypalPayment";

export default class Paypal implements IPaypalPayment{
    private token: Token

    authToken(): Token {
        return new Token()
    }
    paypalPayment(): void {
        this.token = this.authToken()
        console.log("Token:" + this.token.token)
        console.log("Eviando pagamento via PAYPAL")
    }
    paypalReceive(): void {
        this.token = this.authToken()
        console.log("Token:" + this.token.token)
        console.log("Recebendo pagamento via PAYPAL")
    }
}