import PayonnerAdapter from "./adapters/PayonnerAdapter";
import IPayonner from "./payonner/IPayonner";
import Payonner from "./payonner/Payonner";
import IPaypalPayment from "./paypal/IPaypalPayment";
import Paypal from "./paypal/Paypal";

/*console.log("---------------------------------------------------------")
const payment: IPaypalPayment = new Paypal()
payment.paypalPayment()
payment.paypalReceive()

console.log("---------------------------------------------------------")
const payment2: IPayonner = new Payonner()
payment2.sendPayment()
payment2.receivePayment()*/

const payment3 : IPaypalPayment = new PayonnerAdapter(new Payonner())
payment3.paypalPayment()
payment3.paypalReceive()