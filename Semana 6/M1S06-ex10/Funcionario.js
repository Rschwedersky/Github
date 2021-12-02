import Pessoa from "./Pessoa.js"

export default class Funcionario extends Pessoa {
    static somaSalario = new Array();
    constructor(nome, cpf, cargo, salario){
        super(nome, cpf);
        this.cargo = cargo;
        this.salario = Funcionario.arraySalarios(salario);
    
    }
    imprime(){
        console.log(`${this.nome}-${this.cargo}`)
    }
    static arraySalarios(salario){
        Funcionario.somaSalario.push(salario);
        return salario
        

    }
    static calcularSalarios () {
        let soma = Funcionario.somaSalario.reduce((ac , valorAtual) => ac + valorAtual , 0);
        return soma;  
}
}
