function produtoDeTodos(...rest){
   let produto = 1;
   console.log(rest)
    rest.forEach(element => { produto = produto * element;
        });
        return  produto;
}

console.log(produtoDeTodos(1, 2, 3, 4, 5, 6, 7, 8, 9))