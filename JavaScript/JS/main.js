//console.log("hola")
//let saludo = "sadasd sadasd" /* utilizamos la valiable let ya que es la más nueva*/
//var numero = 60.5626//

//hola = "Konichiwa :3"
//console.log(hola) /*en este imprime el konichiwa*/
//hola = 60;

//console.log(hola) /*en este caso imprime el 60 ya que está justo debajo de ese 60*/

//hello = saludo + "string random" + numero;

//console.log(hello) */
/*
let numeroUno = 10;
let numeroDos = 20;
let operación

operacion = numeroUno + numeroDos

/* 
+ suma
- resta
/ división
* multiplicación
*/


/*
console.log(numeroUno + numeroDos)

console.log(operacion)

numeroUno + 1;
//estos dos comandos son exactamente lo mismo
numeroUno++;
*/
/*
let uno = "uno"

{
    //let uno = "dos" //esto se denomina scope, lo de afuera no accede a lo de adentro
    console.log(uno)
    {
        let uno = "tres" 
    }
}
*/
/*
let booleano = false
console.log(booleano)

if(1 == 2){
    console.log("Es verdadero")
}
*/
/*
for(let i = 1;i <= 10;i++) {
    for(let j = 1;j <= 10;j++){
        console.log(i+"*"+j+"="(i*j))
    }
}
*/
/*
let array = [9 ,2, 4, 1, 5, 6, 3, 8, 7, 10]

for(let i=0;i<array.length;i++){
    for(let j=0;j<array.length;j++){
        if(array[j]<array[i]){
            let aux=array[i];

            array[i] = array[j];
            array[j] = aux

            console.log(array)
        }
    }
}
/*
for(let i=0;i < array.length; i++){
    console.log(array[i])
}

for(let iterador of array){
    console(iterador)
}
*/
/*
let f=5;
let factorial=1
for(i=1; i<=f; i++){ //aqui indicamos la variable i con un valor inicial a 1 y decimos que si es menor o iguala la variable F entonces se incrementa el vlaor de la variable i
    factorial*=i // acá le indicamos a JS que multiplique la variable declarada por 
}
console.log(factorial)

*/

function sumar(numeroUno,numeroDos) {
    console.log(numeroDos + numeroUno)
}

sumar(40,5);
