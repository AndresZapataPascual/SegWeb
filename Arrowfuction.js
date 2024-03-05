//variables con let
let num1 = 5;
let codigo = 8405;
let nombre = "Felipe";
let notas  = [3,4,2.5,4.8,20,19,15];
let objeto = {a: 1, b: 3, c: 3};
let validar = true;

//Arrow fuction que no recibe parametros 
const texto = () =>{
    console.log("La suma de sus notas es: ");
};

//Arrow fuction que recibe un parametro 
const Saludo2 = (nameUser) => {
    console.log("Bienvenido señor@ " + nameUser);
};

//Arrow fuction que recibe mas de 2 parametros
const concatenar = (saludo, num, code) => {

    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
      }

      console.log("Hola profesor " + saludo + " numero " + num +  " y codigo " + code + "la suma es: "+ suma);
};

texto();
Saludo2(nombre);
concatenar(nombre,num1,codigo);


//areglos usando funciones tipo flecha 

const palabras = ["gato", "perro", "elefante", "oso", "leon", "tigre"];

const palabrasMasDeCuatroLetras = palabras.filter(palabra => palabra.length > 4); // Filtrar palabras con más de 4 letras
console.log("Palabras con más de cuatro letras:", palabrasMasDeCuatroLetras);

const palabrasConcatenadas = palabrasMasDeCuatroLetras.reduce((concatenacion, palabra) => concatenacion + " " + palabra, ""); // Concatenar las palabras
console.log("Palabras concatenadas:", palabrasConcatenadas);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = numeros.filter(num => num % 2 === 0); // Filtrar los números pares
console.log("Números pares:", numerosPares);

const sumaNumerosPares = numerosPares.reduce((total, num) => total + num, 0); // Sumar los números pares
console.log("Suma de los números pares:", sumaNumerosPares);
