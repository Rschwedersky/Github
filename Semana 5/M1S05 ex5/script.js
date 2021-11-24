
import {Endereco} from './Endereco.js';
import {Cliente} from './cliente.js';

let end = new Endereco('logradouro', 'numero', 'cidade', 'estado', 'pais', 'cep')

let cliente = new Cliente ('logradouro', 'numero', 'cidade', 'estado', 'pais', 'cep', 'nome', 'cpf','celular');
console.log(cliente)
