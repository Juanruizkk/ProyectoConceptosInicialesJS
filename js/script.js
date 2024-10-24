const array = [8, 5, 10, 7, 6, 8, 9, 10, 7, 4, 6, 3, 7, 8, 6, 5, 4, 2, 9, 10];

let promedio = (array) => {
    let cont = 0;
    array.forEach(e => {
        cont += e;
    });
    return cont / array.length;
}

const notaMayorA7 = array.filter((function (x) {
    return x >= 7;
}))



const notaMenorA4 = array.filter((function (x) {
    return x <= 4;
}))

console.log(notaMenorA4);

/* EL porcentaje de clientes que estan satisfechos e insatisfechos */

const total = array.length;
const porcentajeSatisfechos = (notaMayorA7.length / total) * 100;
const porcentajeInsatisfechos = (notaMenorA4.length / total) * 100;

const notaMasRepetida = (array) => {
    let maxFrecuencia = 0;
    let numeroMasRepetido;

    for (let i = 0; i < array.length; i++) {
        let contador = 0;
        for (let j = 0; j < array.length; j++) {
            if (array[i] === array[j]) {
                contador++;
            }
        }
        if (contador > maxFrecuencia) {
            maxFrecuencia = contador;
            numeroMasRepetido = array[i];
        }
    }

    return numeroMasRepetido;
}

const resultadoDiv = document.getElementById('resultado');
resultadoDiv.innerHTML = `
                
                        <p>El promedio es: ${promedio(array)}</p>
                        <p>La cantidad de clientes satisfechos es: ${notaMayorA7.length}</p>
                        <p>La cantidad de clientes insatisfechos es: ${notaMenorA4.length}</p>
                        <p>El porcentaje de clientes satisfechos es: ${porcentajeSatisfechos.toFixed(2)} %</p>
                        <p>El porcentaje de clientes insatisfechos es: ${porcentajeInsatisfechos.toFixed(2)} %</p>
                        <p>La calificación más repetida es: ${notaMasRepetida(array)}</p>
            `;