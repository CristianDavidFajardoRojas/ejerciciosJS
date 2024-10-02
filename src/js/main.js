// **Saludos**
// - Crear un programa que pida ingresar nombres separados por espacios y devuelva un mensaje que contenga un saludo a cada persona. Ejemplo:


const nombresSeparadosYSaludos = () => {
    let nombres = prompt("Ingrese los nombres separados por espacios: ");
    let listaNombre = nombres.split(' ');
    listaNombre.forEach(nombre => {
        console.log(`¡Hola ${nombre}!`)
    })
}
//nombresSeparadosYSaludos()


// **Menor número**
// - Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con el menor número ingresado. Ejemplo:

const numerosSeparadosYMenor = () => {
    let numeros = prompt("Ingrese los numeros separados por espacios: ");
    let listaNumeros = numeros.split(' ');
    let numMenor = listaNumeros[0];
    listaNumeros.forEach(numero => {
        if(numero < numMenor)numMenor = numero;
    })
    console.log(`El numero menor es: ${numMenor}`)
}
//numerosSeparadosYMenor();


// **Suma de todos los números**
// - Crear un programa que pida ingresar números separados por espacios y devuelva un mensaje con la suma de todos los números. Ejemplo:

const numerosSeparadosYSuma = () => {
    let numeros = prompt("Ingrese los numeros separados por espacios: ");
    let listaNumeros = numeros.split(' ');
    let sumNums = 0;
    listaNumeros.forEach(numero => {
        sumNums += Number(numero);
    })
    console.log(`La suma de todos los números es: ${sumNums}`)

}
//numerosSeparadosYSuma();




// **Contiene elementos**
// - Crear un programa que permite ingresar valores separados por espacios, y luego preguntar qué valor se desea averiguar si existe. El programa debe devolver un mensaje diciendo si dicho valor se encuentra dentro de los valores originales o no. Ejemplo:

const numerosSeparadosYSiExiste = () => {
    let numeros = prompt("Ingrese los numeros separados por espacios: ");
    let numeroBuscar = prompt("Ingrese valor a buscar: ");
    let numeroExiste = false;
    let listaNumeros = numeros.split(' ');
    listaNumeros.forEach(numero => {
        if(numeroBuscar == numero)numeroExiste = true
    })
    if(numeroExiste == true){ 
    console.log(`El valor ${numeroBuscar} se encuentra entre los valores originales.`)
    }else console.log(`El valor ${numeroBuscar} NO se encuentra entre los valores originales.`)
}
numerosSeparadosYSiExiste()

