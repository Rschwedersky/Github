async function euNaoEspero(){
        await aguarda5Segundos();
        console.log('Eu não espero')
}
async function aguarda5Segundos() {
        await new Promise(resolve => setTimeout(resolve, 3000)); // 3 sec
        console.log("Função diz: Terminei!")
    }
    euNaoEspero();