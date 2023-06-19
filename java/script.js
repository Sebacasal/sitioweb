//operaciones: dos datos - obtener un tercer dato

//aritmeticas + - * /

let precioRemera=1300
let precioPantalon=5000

console.log(precioPantalon+precioRemera)


console.log("hola" + "Don Jose") //concatenacion: me devuelve "hola Don Jose"
console.log( 1200 + 5000 );
console.log("1200" + "5000"); //strings

console.log("hola" / 5) //NaN: Not a Number ( el resultado no es un numero), pero el tipo de dato NaN es number

//de comparacion -- booleanos: >, <, == , !=, !==, <=, >=  

let edadUsuario=17;
let nombre="pepe";
let administrador="No";
// > (mayor a) < (menor a) >=(mayor o igual a) <=(menor o igual a)
edadUsuario >=18 //false

//doble igual es para comparar el dato, el valor en si. (tiene que ser identico)

edadUsuario == "17" //true
console.log("pepe" == "Pepe") //falso

//triple igual va a comparar el valor  como el tipo de dato

//             17           "17" mismo valor, el tipo de dato no lo es
console.log(edadUsuario === "17") //falso


//!= es dinstinto a ... compara que sea distinto el valor
//!== es dinstinto a ... compara que el valor y el tipo de dato sean distintos
console.log(administrador !== "si") //true






//logicas