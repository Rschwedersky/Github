setInterval(function(){ 
var hora = addZero(new Date().getHours());
var minuto = addZero(new Date().getMinutes());
Estacoes();

function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }
document.getElementById("relogio").innerHTML = `${hora}:${minuto}`
}, 3000);



function Estacoes (){
  a = new Date();
  console.log(a);
 let data1Dia= a.getDate();
  let data1Mes= a.getMonth()+1;
    console.log(data1Mes);
  switch(true){
    
  case((data1Dia<=21 || data1Dia>=22) && (data1Mes>=12)&&(data1Mes<=3)):
    document.getElementById("body").className ="verao";
    break;
  
  case((data1Dia<=21 || data1Dia>=22) && (data1Mes>=3)&&(data1Mes<=6)):
      document.getElementById("body").className ="outono";
    break;
      
  case((data1Dia<=21 || data1Dia>=22)&& (data1Mes>=6)&&(data1Mes<=9)):
    document.getElementById("body").className ="inverno";
    break;

  case((data1Dia<=21 || data1Dia>=22)&&(data1Mes>=9)&&(data1Mes<=12)):
    document.getElementById("body").className ="primavera";
    break;
}}