
import { Endereco } from './Endereco.js';
import {Cliente} from './cliente.js';
import {Conta} from './Conta.js';
import { Transacao } from './Transacao.js';

 let end = new Endereco('logradouro', 'numero', 'cidade', 'estado', 'pais', '12345-123')

let cliente = new Cliente ('nome', '05644109771','celular', end);

let conta = new Conta ('12312', 10, cliente);
let conta2 = new Conta ('12312', 20, cliente);

 new Transacao(conta,200).deposito()
console.log(conta.saldo)
let transacao = new Transacao (conta,50 ,conta2)
transacao.transferencia()
console.log(conta2.saldo)
//let Id = new Transacao (conta,50 ,conta2)
console.log(transacao.idDeTransacao , transacao.date)

//let cpf = '0544109771'
//console.log(Cliente.validaCPF(cpf))

const formCliente = document.querySelector('#formulario-cliente')
const listaClientes = document.querySelector('#lista-cliente')

const historico = []

function registrarNovoCliente(evento) {
    evento.preventDefault() //previne o comportamento default do objeto

    const dadosDoForm = new FormData(evento.target)

    const nome = dadosDoForm.get('nome')
    const logradouro = dadosDoForm.get('logradouro')
    const numero = dadosDoForm.get('numero')
    const cidade = dadosDoForm.get('cidade')
    const estado = dadosDoForm.get('estado')
    const pais = dadosDoForm.get('pais')
    const cep = dadosDoForm.get('cep')
    const numeroDoCelular = dadosDoForm.get('telefone')
    const cpf = dadosDoForm.get('cpf')
    
    if(Cliente.validaCPF(cpf)==false){
        console.log("entrei")
        document.getElementById("t-cpf").value=""
    }
    const endereco = new Endereco (logradouro, numero, cidade, estado, pais, cep);
    const cliente = new Cliente (nome, cpf, numeroDoCelular,endereco);

    cliente.nome = nome
    cliente.cpf = cpf
    cliente.endereco = endereco

    historico.push(cliente)

    console.log('HISTORICO', cliente.resumo())

    evento.target.reset()
    atualizarTela()
}

function atualizarTela() {
    listaClientes.innerHTML = ''

    for (let cliente of historico) {
        const item = document.createElement('li')

        item.innerText = `
      Nome: ${cliente.nome}
      CPF: ${cliente.cpf}
      Endereço: ${cliente.endereco.logradouro}
    `

        listaClientes.appendChild(item)
    }
}

formCliente.addEventListener('submit', registrarNovoCliente)

document.querySelector('#t-btn-limpar').addEventListener('click', () => {
    formCliente.reset()

    for (let i = historico.length; i > 0; i--) {
        historico.pop()
    }

    atualizarTela()
})
