
import Payonner from "../payonner/Payonner";
import IPaypalPayment from "../paypal/IPaypalPayment";
import Token from "../utils/Token";

export default class PayonnerAdapter implements IPaypalPayment{
    private token: Token

    constructor(private payonner: Payonner){
        console.log("Adaptando PAYONNER no PAYPAL")
    }
    paypalPayment(): void {
        return this.payonner.sendPayment()
    }
    paypalReceive(): void {
        return this.payonner.receivePayment()
    }
    authToken(): Token {
        return new Token()
    }

}