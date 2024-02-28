//arreglos (Arrays)
let varios = [1, "juan", "Bogota,20.45", true];
console.log(varios[0]);
console.log(varios.length);
//agregar un solo valor al array(por defecto el ultimo)
varios.push(30);
//sacar un solo valor al array(el ultimo)
varios.pop();

let enteros = [1,2,3,5,7,9];
//concatenar
let concat = varios.concat(enteros);
console.log(concat);
//agregar al inicio
let inicio = concat.unshift("inicio");
console.log(inicio);
//quitar el primero elemento
inicio = concat.shift();


//produce error
//arregloUno.push(1);

for (let i = 0; i < varios.length; i++){

    console.log(varios[i]);
}

//primer metodo para arreglos
varios.forEach(Element => {
    console.log(Element);
});

//.reduce
let numeros = [30,20,10,200,1000,50,4,365];

let resultado = numeros.reduce((accumulador,valorActual)=>{
    return accumulador+valorActual;
});

console.log(resultado);

//filter
let filtrados = numeros.filter( numero => {
    return numero>10;
});

console.log(filtrados);

let paises = [Colombia,brasil,Peru,Ecuador,Estados_Unidos];

let filtered = paises.filter(pais=>{
    return pais.startsWith("C");
});