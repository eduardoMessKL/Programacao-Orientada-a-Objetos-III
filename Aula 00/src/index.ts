import Cliente from "./Cliente";
import Endereco from "./Endereco";
import Produto from "./Produto";
import Telefone from "./Telefone";
import Venda from "./Venda";

let endereco1 : Endereco = new Endereco("Saldanha Marinho", 31, "Guarapuava", "PR")
let telefone1 = new Telefone("42", 98046350, "Celular")
let telefone2 = new Telefone("42", 998620023, "Celular")
let produto1 = new Produto(12, "TV LG", 5000)
let cliente1 : Cliente = new Cliente("Josimar", 89765412309, 3041994, "M", endereco1, [telefone1, telefone2])
let venda1 = new Venda(12, 12032023, cliente1, [produto1])
console.log(cliente1)
console.log(venda1.calcularTotal())
