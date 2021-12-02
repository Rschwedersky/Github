import Pessoa from "./Pessoa.js"
import Funcionario from "./Funcionario.js"

let funcionario = [new Funcionario('Patricia', '02857510','atendente', 1200),
 new Funcionario('alfredo', '02857510','caixa', 2000), 
 new Funcionario('jose', '02857510','gerente', 5000)]

console.log (Funcionario.calcularSalarios())
