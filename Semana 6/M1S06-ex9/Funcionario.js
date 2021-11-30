import Pessoa from "./Pessoa.js"

export default class Funcionario extends Pessoa {
    constructor(nome, cpf, cargo, salario){
        super(nome, cpf);
        this.cargo = cargo;
        this.salario = salario;
    }
}