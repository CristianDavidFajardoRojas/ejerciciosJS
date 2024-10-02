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