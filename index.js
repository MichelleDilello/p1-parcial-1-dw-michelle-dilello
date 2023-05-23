'use strict';

/*
 * DI LELLO MICHELLE
 */


// Discos:
let discos = [];
let contadorDiscos = 0;


// Función Cargar:
const Cargar = () => {
    // Creacion de un disco
    let disco = [];
    contadorDiscos++;
    // Solicitar el nombre del disco
    let nombre;
    do {
        nombre = prompt('Ingrese el nombre del disco:');
        if(nombre == ''){
            alert('No se ha ingresado ningún nombre, intetelo de nuevo.');
        }
        disco['Nombre'] = nombre;
    } while (nombre === null || nombre == '')

    // Solicitar Autor/Banda del disco
    let autor;
    do {
        autor = prompt('Ingrese el autor o la banda del disco:');
        if(autor == ''){
            alert('No se ha ingresado ningún nombre, intetelo de nuevo.');
        }
        disco['Autor'] = autor;
    } while (autor === null || autor == '')

    // Codigo numerico unico del disco
    let codigo;
    let error;
    do {
        error = false;
        codigo = parseInt(prompt('Ingrese el código númerico único del disco'));
        disco['Codigo'] = codigo;
        for (let datos of discos) {
            if (codigo == datos['Codigo']) {
                alert('El codigo ingresado ya existe, por favor ingrese uno nuevo');
                error = true;
            }
        }
        if (codigo < 1 || codigo > 999) {
            alert('El codigo debe estar entre el 1 y el 999');
        }
    } while (isNaN(codigo) || codigo < 1 || codigo > 999 || error == true)

    // Ingresar las pistas
    let pistas = [];
    let nombrePista;
    let duracionPista;
    do {
        do {
            nombrePista = prompt('Ingrese el titulo de la pista:');
            if(nombrePista == ''){
                alert('No se ha ingresado ningún nombre, intetelo de nuevo.');
            }
        } while (nombrePista === null || nombrePista == '')
        do {
            duracionPista = parseInt(prompt('Ingrese la duracion de la pista en segundos:'));
            if (duracionPista  >7200) {
                alert('La duracion de la pista no puede ser mayor a 7200 segundos!');
            }
        } while (isNaN(duracionPista) || duracionPista  > 7200)
        pistas.push(nombrePista);
        pistas.push(duracionPista);
        disco['Pistas'] = pistas;
    } while (confirm('¿Quiere agregar otra pista?'))
    discos.push(disco);
    console.log(discos);
};


// Función Mostrar:
const Mostrar = () => {
    // Variable para ir armando la cadena:
    let html = '';

    html += `<p>Cantidad de Discos Cargados: ${contadorDiscos}</p>`

    // Cositas:
    for (let disco of discos) {
        html += '<ul>'
        html +=    '<li><span>Nombre: </span>' + disco['Nombre'] + '</li>'
        html +=    '<li><span>Autor: </span>'+disco['Autor']+'</li>'
        html +=    '<li><span>Código Numérico Único:</span> '+ disco['Codigo'] + '</li>'
        html +=    '<li><span>Pistas: </span>'
        html +=        '<ul>' 
                for (let pista of disco['Pistas']){
                    html += pista>=180 ? `<li style="color:red;">${pista}</li>` : `<li>${pista}</li>`;
                }
        html +=        '</ul>' 
        html +=    '</li>'
        html += '</ul>'
        // for (let pista of disco['Pistas']) {
        //     html += `<p>${pista}</p>`;
        // }
    }
    // Si modificaste el nombre de la variable para ir armando la cadena, también hacelo acá:
    document.getElementById('info').innerHTML = html; // <--- ahí es acá
};

// Todas las funciones que necesites:
