export default class Produto {
    
    static somaTotal = new Array();
    constructor(nome, quantidade, valor){
        this.nome = nome;
        this.quantidade = quantidade;
        this.valor = valor;
        this.valorTotal = Produto.adicionarValorTotal(valor * quantidade);
    }
    static adicionarValorTotal(valor){
        Produto.somaTotal.push(valor);
        return valor
    }
    static calcularValorTotal () {
        let soma = Produto.somaTotal.reduce((ac , valorAtual) => ac + valorAtual , 0);
        return soma;  
    }
}
