class Retangulo {
  constructor(altura, largura) {
    this.altura = altura;
    this.largura = largura;
  }
}
let retangulos = new Array();
for (let i = 0; i < 3; i++){
  retangulos[i]=new Retangulo(2*i+1, 5*i+1);
  console.log(retangulos[i]);
}
