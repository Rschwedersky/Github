import Produto from "./Produto.js"


let Produtos = [new Produto('lapis', 2, 145),
new Produto('caneta', 5, 255), 
new Produto('papel', 6, 555)]

console.log (Produto.calcularValorTotal())
console.log (Produtos[0].valorTotal)
