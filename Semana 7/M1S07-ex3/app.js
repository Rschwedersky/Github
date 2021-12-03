function concat(arrayA, arrayB){
   arrayA = [...arrayA,...arrayB]
        return  arrayA;
}
let arrayA = [1,2,3];
let arrayB = [4,5,6]
console.log(concat(arrayA, arrayB))