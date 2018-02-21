// Listado de estudiantes
var estudiantes = [
	{ codigo: "0001", nombre: "Gustavo Parra", nota: 2.0},
	{ codigo: "0002", nombre: "Andrea Rojas", nota: 0 }, 
	{ codigo: "0003", nombre: "Jessica Álvarez", nota: 10.0}
];

window.onload = cargarEventos;
function cargarEventos () {

	document.getElementById('registrarUsuario').addEventListener('submit', agregarEstudiante, false);
	document.getElementById('hightScore').addEventListener('click', mejorNota, false);
	document.getElementById('lowestScore').addEventListener('click', peorNota, false);
	document.getElementById('average').addEventListener('click', promedio, false);
}


// leer JSON
function leerJSON (json) {

	var listadoEstudiantes = document.getElementById('estudiantes-tabla');
	var estudiantesRegistrados = "";

	for (var i = 0 ; i < estudiantes.length; i++) {
		estudiantesRegistrados += "<tr> <th scope='row'>" + estudiantes[i].codigo +  "</th> <td>"  + estudiantes[i].nombre + "</td> <td>" + estudiantes[i].nota + "</td> </tr>"
	};

	listadoEstudiantes.innerHTML = estudiantesRegistrados;
}

// imprimir el listado de estudiantes
( function () {

	leerJSON(estudiantes);

}) ()


function agregarEstudiante (event)	{

	event.preventDefault();
	var codigoEstudiante = document.getElementById('codigo').value;
	var nombreEstudiante = document.getElementById('nombre').value;
	var notaEstudiante = document.getElementById('nota').value;
	
	var nuevoEstudiante = { codigo: codigoEstudiante, nombre: nombreEstudiante, nota: notaEstudiante};
	estudiantes.push(nuevoEstudiante);	
	leerJSON(estudiantes);
}

// Calcular el promedio de las notas
function promedio (json) {
	var promedio = 0;
	estudiantes.forEach(function (obj){
		promedio += parseFloat(obj.nota);
	})
	promedio = (promedio)/estudiantes.length;
	promedio = "El promedio de las notas obtenidas por los estudiantes del curso es: " + promedio;
	
	document.getElementById('promedio').innerHTML = promedio;
	alert(promedio);

	console.log(promedio);

}

// Ordenar el JSON
function ordenarJSON(data, key, orden) {
    return data.sort(function (a, b) {
        var x = a[key],
        y = b[key];

        if (orden === 'asc') {
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }

        if (orden === 'desc') {
            return ((x > y) ? -1 : ((x < y) ? 1 : 0));
        }
    });
}


// Calcular la mejor nota
function mejorNota (){
	var ordenDescJSON = ordenarJSON(estudiantes, 'nota', 'desc');
	var mejorNota = ordenDescJSON[0].nota;

	var hightScore = "El estudiante del curso con la mejor nota es: " + ordenDescJSON[0].nombre + " con una nota de " + mejorNota;
	
	document.getElementById('mejorNota').innerHTML = hightScore;
	alert("El estudiante del curso con la mejor nota es: " + ordenDescJSON[0].nombre + " con una nota de " + mejorNota);

	console.log("El estudiante del curso con la mejor nota es: " + ordenDescJSON[0].nombre + " con una nota de " + mejorNota);	
}

// Calcular la nota más baja
function peorNota () {
	var ordenAscJSON = ordenarJSON(estudiantes, 'nota', 'asc');
	var malaNota = ordenAscJSON[0].nota;

	var lowestScore = ordenAscJSON[0].nombre + " no te preocupes, tu nota fue " + malaNota + " con algo de esfuerzo y dedicación mejorarás tu rendimiento." ;

	document.getElementById('peorNota').innerHTML = lowestScore;
	alert(document.getElementById('peorNota').innerHTML = ordenAscJSON[0].nombre + " no te preocupes, tu nota fue " + malaNota + " con algo de esfuerzo y dedicación mejorarás tu rendimiento.");

	console.log(ordenAscJSON[0].nombre + " no te preocupes, tu nota fue " + malaNota + " con algo de esfuerzo y dedicación mejorarás tu rendimiento.");	
}
