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


// **Frutas**
// - Crear un programa que pida ingresar 🍎, 🍐y 🍑 y devuelva un mensaje con la cantidad que hay de cada una. Ejemplo:


const frutasYCantidad = () => {
    let frutas = prompt("Ingrese las frutas separas por espacios 🍎, 🍐 y 🍑 : ");
    let manzanas = 0;
    let peras = 0;
    let duraznos = 0;
    let listaFrutas = frutas.split(' ');
    console.log(listaFrutas)                                                                  
    listaFrutas.forEach(fruta => {  
        if(fruta == '🍎')manzanas += 1;
        if(fruta == '🍐')peras += 1;
        if(fruta == '🍑')duraznos += 1;
    })

    console.log(`Hay ${manzanas} 🍎, ${peras} 🍐 y ${duraznos} 🍑`)

}
// frutasYCantidad();



// **Comida para monos**
// - Crear un programa que permita ingresar una lista de 🐵(monos) y **🍌**(bananas). Preguntar luego cuántas bananas come cada mono. Mostrar en un mensaje si hay suficientes bananas para cada mono. Ejemplo:

const comidaParaMonos = () => {
    let monosybananas = prompt("Ingrese monos y bananas 🐵 🍌 : ");
    let bananaPorMono = prompt("Cuántas bananas come cada mono?:");
    let monos = 0;
    let bananas = 0;
    let listamonosybananas = monosybananas.split(' ');
    console.log(listamonosybananas)                                                                 
    listamonosybananas.forEach(monos_bananas => {  
        if(monos_bananas == '🐵')monos += 1;
        if(monos_bananas == '🍌')bananas += 1;
    })

    if(bananas !== 0 ){
        if((bananas / Number(bananaPorMono)) >= monos )console.log('¡Si hay suficientes bananas para los monos! 🐵🍌')
        else console.log('¡Oh no!¡No hay suficientes bananas para los monos! 😭')
    }

}
// comidaParaMonos()



// **Perros y gatos**
// - Crear un programa que permita ingresar perros y gatos y devuelva un mensaje con los perros agrupados por un lado y los gatos por otro. Ejemplo:


const perrosYGatos = () => {
    let animales = prompt("Ingrese las frutas separas por espacios 🐶 🐱: ");
    let perros = '';
    let gatos = '';
    let listaAnimales = animales.split(' ');                                                                 
    listaAnimales.forEach(fruta => {  
        if(fruta == '🐶')perros += '🐶';
        if(fruta == '🐱')gatos += '🐱';
    })
    console.log(perros, gatos)
}
// perrosYGatos()




// **Chat**
// - Crear un programa que dado una lista de nombres de usuarias separadas por espacios, muestre un mensaje con el status del chat. Las reglas son:

// - Para una usuaria, debe mostrar: `nombre usuaria + está conectada`
// - Para dos usuarias, debe mostrar: `nombre usuaria 1 + y +  nombre usuaria 2 + están conectadas`
// - Para más de dos usuarias, debe mostrar: `nombre usuaria 1, nombre usuaria 2 + y X persona(s) más están conectadas`


const chat = () => {
    let nombresUsuarias = prompt("Ingrese nombres de usuarias: ");
    let listaNombresUsuarias = nombresUsuarias.split(' ');                                                                 
    if(listaNombresUsuarias.length == 1) console.log(`${listaNombresUsuarias[0]} está conectada`)
    else if(listaNombresUsuarias.length == 2) console.log(`${listaNombresUsuarias[0]} y ${listaNombresUsuarias[1]} están conectadas`)
    else console.log(`${listaNombresUsuarias[0]}, ${listaNombresUsuarias[1]} y ${listaNombresUsuarias.length - 2} persona(s) más están conectadas`)
}
chat()




