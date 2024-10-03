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
//numerosSeparadosYSiExiste()



// **Encontrar índice**
// - Crear un programa que permite ingresar valores separados por espacios, y luego preguntar qué valor se desea encontrar el índice. El programa debe devolver un mensaje con el índice del primer elemento que sea igual al buscado, o indicar si no se ha encontrado. Ejemplo:

function encontrarIndice() {
    const valores = prompt("Ingrese valores separados por espacios:").split(" ");
    const valorBuscado = prompt("Ingrese valor a buscar:");
    const indice = valores.indexOf(valorBuscado);

    if (indice !== -1) {
        alert(`El valor ${valorBuscado} se encuentra en el índice ${indice}`);
    } else {
        alert(`El valor ${valorBuscado} no se encuentra en la lista`);
    }
}

//encontrarIndice();



// **Sam y Frodo**
// - Crear un programa que permita saber si Sam y Frodo están juntos. El programa debe permitir ingresar nombres separados por espacios, y mostrar con un mensaje si Sam se encuentra al lado de Frodo, ya sea antes o después. Ejemplo:


const nombresSeparadosYSamYFrodo = () => {
    let nombres = prompt("Ingrese los nombres separados por espacios: ");
    let FrodoASalvo = false;
    let listaNombre = nombres.split(' ');
    listaNombre.forEach( (nombre, index) => {
        if(listaNombre[index] == "Frodo" && (listaNombre[index + 1] == "Sam" || listaNombre[index - 1] == "Sam"))FrodoASalvo = true;
    })

    if (FrodoASalvo == true){console.log('Sam y Frodo están juntos, ¡Frodo está a salvo!')}else{  console.log('Sam y Frodo están separados, ¡Frodo está en peligro!')}

}

// nombresSeparadosYSamYFrodo()


