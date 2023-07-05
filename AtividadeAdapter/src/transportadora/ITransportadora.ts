import Token from "../utils/Token"

export default interface ITransportadora{
    send(): void
    receive(): void
}