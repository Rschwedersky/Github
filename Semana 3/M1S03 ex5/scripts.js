setInterval(function(){ 
var hora = addZero(new Date().getHours());
var minuto = addZero(new Date().getMinutes());

function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
  }
console.log(hora);
console.log(minuto);
document.getElementById("relogio").innerHTML = `${hora}:${minuto}`
}, 3000);
