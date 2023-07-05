import Token from "../utils/Token"

export default interface IPaypalPayment{
    authToken(): Token
    sendPayment(): void
    receivePayment(): void
}