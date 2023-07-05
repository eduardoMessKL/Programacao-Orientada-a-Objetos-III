import TransportadoraAdapter from "./adapters/TransportadoraAdapter"
import ICorreios from "./correios/ICorreios"
import ITransportadora from "./transportadora/ITransportadora"
import Transportadora from "./transportadora/Transportadora"
import Correios from "./correios/Correios"

const carta : ICorreios = new TransportadoraAdapter(new Transportadora())
carta.receiveCorreios()
carta.sendCorreios()

const carta1 : ICorreios = new Correios()
carta1.receiveCorreios()
carta1.sendCorreios()

const carta2 : ITransportadora = new Transportadora()
carta2.receive()
carta2.send()